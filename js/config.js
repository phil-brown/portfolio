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
	config.title = "Mobile Developer";
	/**
	 * Some summary about who you are or what you do
	 */
	config.summary = "I created this website! More soon.";
	/**
	 * Name of the company you work for
	 */
	config.company = "North Pole Engineering";
	
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
	config.twitter = "philip22brown";
	
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
	config.google_analytics = "UA-XXXXX-X";
	
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
	                 {src: "img/foo.jpeg", alt: "Where's Waldo?", title: "Where's Waldo?"}, 
	                 {src: "img/bar.jpg", alt: "cup o' joe", link: "http://shop.github.com/products/github-mug"}
	                ];
	
	/**
	 * Reference to custom .html document to load into portfolio document
	 */
	config.customHTML = "custom.html";
}
(window.config = window.config || {}, jQuery));