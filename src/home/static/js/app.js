var ico_nav = document.getElementById("button_navigation");
var ico_settings = document.getElementById("button_settings");

ico_nav.addEventListener("click", function() {

    if (ico_nav.getAttribute("src") == "../static/images/navigation2.svg") {
        ico_nav.setAttribute("src", "../static/images/navigation.svg")
        ico_settings.style.display = "none";
    }
    else {
        ico_nav.setAttribute("src", "../static/images/navigation2.svg")
        ico_settings.style.display = "block";
    }

});

ico_settings.addEventListener("click", function () {
    alert("wesh");
});
