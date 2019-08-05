document.body.addEventListener("ready", function(){
    if(getCookie("ixianCookieAgreed") != "")
    {
        closeCookiePolicyBar();
    }
});

function closeCookiePolicyBar()
{
    document.getElementById("cookiePolicyBar").style.display = "none";
    document.cookie = "ixianCookieAgreed=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}