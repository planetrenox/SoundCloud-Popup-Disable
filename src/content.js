// TODO: optimize this
setInterval(function() {
    // find all elements with class name .commentPopover
    let popovers = document.getElementsByClassName('commentPopover');
    // set visibility to hidden
    for (let i = 0; i < popovers.length; i++) {
        popovers[i].style.visibility = 'hidden';
    }
}, 1000);


