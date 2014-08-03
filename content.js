/* Inform the backgrund page that 
 * this tab should have a page-action */
chrome.runtime.sendMessage({
    from:    'content',
    subject: 'showPageAction'
});

/* Listen for message from the popup */
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    /* First, validate the message's structure */
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        /* Collect the necessary data 
         * (For your specific requirements `document.querySelectorAll(...)`
         *  should be equivalent to jquery's `$(...)`) */
        var SbjID = new Array
        var x = document.querySelectorAll("td")
        for (var i = 0; i < x.length; ++i) {
            if (i % 7 == 0) {
                SbjID.push(x[i].innerText.replace("s/ //g"))
            }
        }
        var domInfo = {
            sbj: SbjID
        };
        /* Directly respond to the sender (popup), 
         * through the specified callback */
        response(domInfo);
    }
});