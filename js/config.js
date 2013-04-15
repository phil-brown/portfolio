/**
 * 
 */
(function( config, $, undefined) 
{
	config.name = "My Name";
	config.title = "My Job Title";
	config.summary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	config.company = "current employer";
	
	//config.email = "foobar@example.com";
	config.phone = "555-555-5555";
	config.location = "Minnesota, USA";
	
	config.github = "phil-brown";
	config.twitter = "philip22brown";
	//config.stackoverflow = "763080";
	//config.linkedin = "http://www.linkedin.com/pub/phil-brown/22/a08/a65";
	
	/** 
	 * Use this to show the gravatar profile picture if you decide not to provide an email address. 
	 * This hash can be generated in code: 
	 * <pre>
	 * MD5(($.trim(config.email)).toLowerCase())
	 * </pre>
	 * or online: http://www.md5hashgenerator.com
	 */
	config.gravatar_hash = "e64061a865ef84951bf78944dfecc808";
	
	//Google Analytics: change UA-XXXXX-X to be your site's ID.
	config.google_analytics = "UA-XXXXX-X";
	
	/**
	 * Refers to the stylesheet used. This means that css/simple.css is used
	 */
	config.style = "simple";
	
	config.links = [];
	config.images = [];//?
}
(window.config = window.config || {}, jQuery));