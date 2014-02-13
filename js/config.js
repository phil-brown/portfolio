/**
 * 
 */
(function( config, $, undefined) 
{
	/**
	 * Your Name
	 */
	config.name = "Phil Brown";
	/**
	 * Your title - such as "Software Developer" or "Web Designer"
	 */
	config.title = "Senior Mobile Developer";
	/**
	 * Some summary about who you are or what you do
	 */
	config.summary = "I am a mobile applications developer with 7 years of Java experience, 3 \
	years of Android experience, 1.5 years of iOS & Objective-c experience, and nearly a year of HTML5 \
	experience. I currently work at <a href='http://www.mentormate.com'>MentorMate</a>, and develop new apps. \
	for clients. \
	<br>\
	On my spare time I enjoy roasting coffee, brewing beer, and writing open source software, such as <a href='http://bit.ly/droidquery'>droidQuery</a>. \
	<br>";
	
	/**
	 * Name of the company you work for
	 */
	config.company = "MentorMate, LLC";
	
	/**
	 * Email address. Any format. This will also be used to retrieve your Gravatar, unless the gravatar hash is
	 * set
	 */
	config.email = null;
	/**
	 * Phone number. Any Format
	 */
	config.phone = null;
	/**
	 * Name of the location where you live or work. Be as vague or specific as you like. Ex: "Minnesota, USA"
	 */
	config.location = "Minnesota, USA";
	
	/**
	 * This is your GitHub username
	 */
	config.github = "phil-brown";
	/**
	 * This is your twitter handle. You can include the @, but don't have to
	 */
	config.twitter = "phdbrown";
	
	/**
	 * Stack Overflow profile ID. this is the number before your username if you look at your profile
	 */
	config.stackoverflow = "763080";
	/**
	 * URL to your linkedIn public profile
	 */
	config.linkedin = "http://www.linkedin.com/pub/phil-brown/22/a08/a65";
	
	/** 
	 * Use this to show the gravatar profile picture if you decide not to provide an email address.
	 * (or if the provided address is not the same as the one associated with your gravatar)
	 * This hash can be generated in code: 
	 * <pre>
	 * MD5(($.trim(config.email)).toLowerCase())
	 * </pre>
	 * or online: http://www.md5hashgenerator.com (with your email address as the input)
	 */
	config.gravatar_hash = "e64061a865ef84951bf78944dfecc808";
	
	/** Google Analytics: change UA-XXXXX-X to be your site's ID. */
	config.google_analytics = "UA-42406660-2";
	
	/**
	 * Refers to the stylesheet used. This means that css/simple.css is used.
	 * Other stylesheets will be added soon, but feel free to use your own
	 */
	config.style = "simple";
	
	/**
	 * Contains Objects that provide a src reference. Can also add alt, title, and a link.
	 * These images will appear in a table on the page
	 */
	config.images = [
	                 {src: "img/plates_snapshot.png", alt: "Plate Tectonics (Android). Part of amplify.com.", title: "Plate Tectonics (Android). Part of amplify.com.", link: "http://www.smallplanet.com" }, 
	                 {src: "img/bodySim_snapshot.png", alt: "Body Simulator (Android). Part of amplify.com.", title: "Body Simulator (Android). Part of amplify.com.", link: "http://www.smallplanet.com" },
	                 {src: "img/lostRobot_snapshot.png", alt: "Ancient Robot (Android). Part of amplify.com.", title: "Ancient Robot (Android). Part of amplify.com.", link: "http://www.smallplanet.com" },
	                 {src: "img/cyclopath_snapshot.png", alt: "Cyclopath Mobile (Android)", title: "Cyclopath Mobile (Android)", link: "https://market.android.com/details?id=org.cyclopath.android" },
	                 {src: "img/ap-aware_snapshot.png", alt: "Ap-Aware Anti-Malware (Android)", title: "Ap-Aware Anti-Malware (Android)", link: "https://market.android.com/details?id=com.apaware.android" }
	                ];
	
	/**
	 * Reference to custom .html document to load into portfolio document
	 */
	config.customHTML = "custom.html";
}
(window.config = window.config || {}, jQuery));