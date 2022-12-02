// for analytics
window.dataLayer = window.dataLayer || [];

function gtag()
{
    dataLayer.push(arguments);
}
gtag('js', new Date());

if (new Date().getMonth() == 11)
{
    document.getElementById("christmas").style.opacity = "100%";
}
else
{
    document.getElementById("christmas").style.opacity = "0%";
}