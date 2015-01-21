# jquery.responsive-image-loader
a jquery plugin which detect resolution or bandwidth for image loading

#how to use it :
...
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>demo jResponsiveImageLoader</title>
        
<style type="text/css">

</style>
        
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.responsive-image-loader.min.js"></script>
<script type="text/javascript">
$(function(){
	$('.lazy').jResponsiveImageLoader({
	});
	$('.lazy-bandwidth').jResponsiveImageLoader({
	    event : 'load',
	    detection : 'bandwidth',
	    file : {
	        src : 'test.png',
	        weight : 91
	    },
	    map : [128, 512, 1024, 4096]
	    
	});
	$('.lazy-resolution').jResponsiveImageLoader({
	    event : 'load',
	    detection : 'resolution',
	    map : [320, 480, 800, 1024]
	});
	$('.lazy-no-resize').jResponsiveImageLoader({
	    event : 'load',
	    detection : 'resolution',
	    map : [320, 480, 800, 1024],
	    resize : false
	});
});
</script>
</head>
<body>
<h1>Demo jResponsiveImageLoader</h1>
<h2>sans arguments (resolution par defaut)</h2>
<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" 
    data-original="logo.jpg" 
    data-w320="logo-w320.jpg" 
    data-w480="logo-w480.jpg" 
    data-w800="logo-w800.jpg" 
alt="lorem"/>
<br /><br />
<h2>detection par resolution</h2>
<img class="lazy-resolution" src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" 
    data-original="logo.jpg" 
    data-w320="logo-w320.jpg" 
    data-w480="logo-w480.jpg" 
    data-w800="logo-w800.jpg" 
    data-w1024="logo-w1024.jpg" 
alt="lorem"/>
<br /><br />
<h2>detection par bandwidth</h2>
<img class="lazy-bandwidth" src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" 
    data-original="logo.jpg" 
    data-b128="logo-b128.jpg" 
    data-b512="logo-b512.jpg" 
    data-b1024="logo-b1024.jpg" 
    data-b4096="logo-b4096.jpg" 
    width="100%"
alt="lorem"/>
<br /><br />
<br /><br /><br /><br /><br /><br />
<div>
Images by Pierre Dalous (Own work) [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC-BY-SA-3.0</a>], <a href="http://commons.wikimedia.org/wiki/File%3ANiverolle_Montagne_noire_Francer.jpg">via Wikimedia Commons</a>
</div>
</body>
</html>
...
