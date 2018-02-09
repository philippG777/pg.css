var pg = {
    showPopup: function (id, outsideClickClose)
    {
        var element = document.getElementById(id).className += " active";
        if (outsideClickClose)
        {
            element.addEventListener("click", pg.hidePopup);
        }
    },

    hidePopup: function (event)
    {
        console.log(event);
        console.log("hidePopup");
        var classes = element.className.split(' ');
        var index = classes.indexOf(className);
        if(index != -1)
        {
            classes.splice(index, 1);
        }
        else
        {
            pg.hidePopup(element.parentElement);
        }
        element.className = classes.join(' ');
    }
};