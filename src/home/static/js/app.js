var button_navigation = document.getElementById("button_navigation");
var button_settings = document.getElementById("button_settings");

button_navigation.addEventListener("click", function() {

    if (button_navigation.getAttribute("src") == "../static/images/button_navigation2.svg") {
        button_navigation.setAttribute("src", "../static/images/button_navigation.svg")
        button_settings.style.display = "none";
    }
    else {
        button_navigation.setAttribute("src", "../static/images/button_navigation.svg")
        button_settings.style.display = "block";
    }

});

button_settings.addEventListener("click", function () {
    alert("wesh");
});
