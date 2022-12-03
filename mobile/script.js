// for analytics
window.dataLayer = window.dataLayer || [];

function gtag()
{
    dataLayer.push(arguments);
}
gtag('js', new Date());

if (new Date().getMonth() == 11) // 11
{
    document.getElementById("christmas").style.background = "url(\"../media/christmas.webp\")";
    document.getElementById("christmas").style.backgroundRepeat = "no-repeat";
    document.getElementById("christmas").style.backgroundSize = "cover";
}

if (new Date().getMonth() == 10) // 9
{
    document.getElementById("moon").style.background = "url(\"../media/moon.png\")";
    document.getElementById("moon").style.backgroundRepeat = "no-repeat";
    document.getElementById("moon").style.backgroundSize = "cover";

    document.body.style.backgroundImage = "url(media/night.jpg)";
    document.getElementById("main-container").style.backgroundColor = "rgb(30, 30, 30)";

    /*
    document.getElementById("list").classList.remove("list-row");
    document.getElementById("list").classList.add("list-row-orange", "list-row-orange::before");

    console.log( document.getElementById("list").classList);
    */
}