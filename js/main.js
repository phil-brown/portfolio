/**
 * This Object communicates directly with the document, and passes calls onto the controller
 * @author Phil Brown
 */

/**
 * Toggle true or false to show console debug messages
 */
var DEBUG = true;

/**
 * Called when the document loads to delegate the controller
 */
function main()
{
	var controller = new Controller();
	controller.takeControl();
}
