/**
 * 
 */
(function( config, $, undefined) 
{
	/**
	 * Your Name
	 */
	config.name = "My Name";
	/**
	 * Your title - such as "Software Developer" or "Web Designer"
	 */
	config.title = "My Job Title";
	/**
	 * Some summary about who you are or what you do
	 */
	config.summary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	/**
	 * Name of the company you work for
	 */
	config.company = "current employer";
	
	/**
	 * Email address. Any format. This will also be used to retrieve your Gravatar, unless the gravatar hash is
	 * set
	 */
	config.email = "foobar@example.com";
	/**
	 * Phone number. Any Format
	 */
	config.phone = "555-555-5555";
	/**
	 * Name of the location where you live or work. Be as vague or specific as you like. Ex: "Minnesota, USA"
	 */
	config.location = null;
	
	/**
	 * This is your GitHub username
	 */
	config.github = null;
	/**
	 * This is your twitter handle. You can include the @, but don't have to
	 */
	config.twitter = null;
	
	/**
	 * Stack Overflow profile ID. this is the number before your username if you look at your profile
	 */
	config.stackoverflow = null;
	/**
	 * URL to your linkedIn public profile
	 */
	config.linkedin = null;
	
	/** 
	 * Use this to show the gravatar profile picture if you decide not to provide an email address.
	 * (or if the provided address is not the same as the one associated with your gravatar)
	 * This hash can be generated in code: 
	 * <pre>
	 * MD5(($.trim(config.email)).toLowerCase())
	 * </pre>
	 * or online: http://www.md5hashgenerator.com (with your email address as the input)
	 */
	config.gravatar_hash = "";
	
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