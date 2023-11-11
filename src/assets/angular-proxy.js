document.addEventListener('testEvent', function(event) {
        try
        {
                mp.trigger('CEFDoneUsingBrowser');
                mp.gui.chat.push("hello world");
                console.log(event)
        }
        catch(error)
        {
                console.log(error)
        }
        
});

