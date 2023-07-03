window.addEventListener('load', function() {
    setTimeout(function() {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector(".o-loader-page").style.visibility = "hidden";
    document.querySelector(".o-loader-page").style.opacity = "0";
    }, 300);
});