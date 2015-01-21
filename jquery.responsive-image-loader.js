;(function(){
	/**
	 * param :
	 * {
	 * 		event : 'load',
	 * 		map : [320,480, 800, 1024]
	 */
	$.fn.jResponsiveImageLoader = function(parameters){
			var params = parameters || {}, sizeTest = null, $this = $(this), timerUid = null;
			
			if (typeof params.event == 'undefined') {
				params.event = 'load';
			}
			if (typeof params.resize == 'undefined') {
				params.resize = true;
			}
			if (typeof params.file == 'undefined') {
				params.detection = 'resolution';
			} else {
				params.detection = 'bandwidth';
			}
			if (typeof params.map == 'undefined') {
				if (params.detection === 'bandwidth') {
					params.map = [128, 512, 1024, 4096, 10240, 20480];
				} else {
					params.map = [320, 480, 800];
				}
			}
			function getSize(map){
				var width = window.innerWidth, i = 0, len = map.length, size = '0';
				for (;i < len; i++) {
					if (parseInt(width, 10) >= parseInt(map[i])) {
						size = 'w' + map[i];
					}
				}
				if (size === '0') {
					size = 'original';
				}
				
				return size;
			}
			function getBandWidth(file, map, callback){
				var img = new Image(),timeStart = 0, i = 0, len = map.length, size = '0', 
				timeEnd = 0, totalTime = 0, speed = 0;
				img.src = file.src + '?_' + new Date().getTime();
				timeStart = new Date().getTime();
				img.onload = function(){
					timeEnd = new Date().getTime(),
						totalTime = (timeEnd - timeStart) / 1000,
						speed = Math.ceil(file.weight / totalTime);
					
					for (;i < len; i++) {
						if (speed >= map[i]) {
							if (i === len) {
								size = 'b' + map[i];
							} else {
								size = 'b' + map[i+1];
							}
						}
					}
					if (size === 'bundefined') {
						size = 'original';
					}
					sizeTest = size;
					callback();
					return size;
				};
			}
			function processResolution($elt, screenSize) {
				var originalSrc = $elt.data(screenSize), img = $elt, 
				screenHeight = $(window).height(), 
				imgPosition = $elt.offset(), loaded = false, htmlBodyTop;
				$elt.css('opacity', 0);
				if (typeof originalSrc === 'object' || typeof originalSrc == 'undefined') {
					originalSrc = $elt.data('original');
				}
				htmlBodyTop = $(document).scrollTop() + screenHeight;
				if (imgPosition.top <= htmlBodyTop) {
					//on charge l'image 
					img.attr('src', originalSrc).animate({
						opacity : 1
					}, 'slow');
					loaded = true;
				}
				$(document).scroll(function(){
					if (loaded === false) {
						htmlBodyTop = $(this).scrollTop() + screenHeight;
						imgPosition = img.offset();
						if (imgPosition.top <= htmlBodyTop) {
							//on charge la page 
							img.attr('src', originalSrc).animate({
								opacity : 1
							}, 'slow');
							loaded = true;
						}
					}
				});
			}
			
			function triggerAction(params) {
				var screenSize = '0', timerUidInterval = null;
				if (params.detection === 'bandwidth') {
					getBandWidth(params.file, params.map, function(){
						screenSize = sizeTest;
						$this.each(function(){
							processResolution($(this), screenSize);
						});
					});					
				} else {
					screenSize = getSize(params.map);
					return $this.each(function(){
						processResolution($(this), screenSize);
					});
				}
			}
			
			$(window).on(params.event, function(){
				triggerAction(params);
			});
		};
})();