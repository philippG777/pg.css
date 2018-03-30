/*! pg.css | BSD 3-Clause License | github.com/philippG777/pg.css */
"use strict";

var pg = {
    showPopup: function (arg)
    {
        var element;
        if (typeof arg == "string")
            element = document.getElementById(arg);
        else
            element = arg;
        element.className += " active";
        return element
    },


    addCloseAction: function (element, outsideClose)
    {
        var closeBtns = Array.from(element.getElementsByClassName("close-button"));
        closeBtns.forEach(function (el)
        {
            el.addEventListener("click", function (ev)
            {
                ev.stopPropagation();
                pg.hidePopup(ev.target);
            });
        });

        if (outsideClose)
            element.addEventListener("click", function (ev)
            {
                ev.stopPropagation();
                if (ev.target.className.indexOf("popup") != -1 && ev.originalTarget.className.indexOf("active") != -1)
                    pg.hidePopup(ev.target);
            });

        return element;
    },


    hidePopup: function (element, ttl)
    {
        if (ttl == undefined)
            ttl = 5;    // max. 5 times recursion

        var classes;

        if (element.className.baseVal != undefined)
        {
            classes = element.className.baseVal.split(" ");
        }
        else
        {
            classes = element.className.split(" ");
        }

        var isPopup = classes.indexOf("popup") != -1;
        var index = classes.indexOf("active");
        if(isPopup && index != -1)
        {
            classes.splice(index, 1);
            
            if (element.className.baseVal != undefined)
            {
                element.className.baseVal = classes.join(" ");
            }
            else
            {
                element.className = classes.join(" ");
            }
        }
        else
        {
            if (ttl == 0 || element.tagName == "BODY")  // popup has to be in the body
            {
                return;
            }
            pg.hidePopup(element.parentElement, ttl - 1);
        }
    }
};
