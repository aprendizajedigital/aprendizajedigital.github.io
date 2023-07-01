const bucle_thickness = () => {
    document.querySelector(".c-recapitulate__span-text-2").style.transition = "text-decoration 0.5s ease";
    
    document.querySelectorAll(".o-prices__price")[0].style.transition = "text-decoration 0.5s ease";
	document.querySelectorAll(".o-prices__price")[1].style.transition = "text-decoration 0.5s ease";
	document.querySelectorAll(".o-prices__price")[3].style.transition = "text-decoration 0.5s ease";
	document.querySelectorAll(".o-prices__price")[4].style.transition = "text-decoration 0.5s ease";

    document.querySelectorAll(".c-seconds-bonds__title-span").forEach(item => {
        item.style.transition = "text-decoration 0.5s ease";
    });

    document.querySelectorAll(".c-recapitulate__span").forEach(item => {
        item.style.transition = "text-decoration 0.5s ease";
    });

    setTimeout(showTransition, 300);
}

const showTransition = () => {
    document.querySelector(".c-recapitulate__span-text-2").style.textDecorationColor = "red";
    
    document.querySelectorAll(".o-prices__price")[0].style.textDecorationColor = "red";
	document.querySelectorAll(".o-prices__price")[1].style.textDecorationColor = "red";
	document.querySelectorAll(".o-prices__price")[3].style.textDecorationColor = "red";
	document.querySelectorAll(".o-prices__price")[4].style.textDecorationColor = "red";

    document.querySelectorAll(".c-seconds-bonds__title-span").forEach(item => {
        item.style.textDecorationColor = "red";
    });

    document.querySelectorAll(".c-recapitulate__span").forEach(item => {
        item.style.textDecorationColor = "red";
    });

    setTimeout(hideTransition, 2000);
}

const hideTransition = () => {
    document.querySelector(".c-recapitulate__span-text-2").style.textDecorationColor = "transparent";

	document.querySelectorAll(".o-prices__price")[0].style.textDecorationColor = "transparent";
	document.querySelectorAll(".o-prices__price")[1].style.textDecorationColor = "transparent";
	document.querySelectorAll(".o-prices__price")[3].style.textDecorationColor = "transparent";
	document.querySelectorAll(".o-prices__price")[4].style.textDecorationColor = "transparent";

    document.querySelectorAll(".c-seconds-bonds__title-span").forEach(item => {
        item.style.textDecorationColor = "transparent";
    });

    document.querySelectorAll(".c-recapitulate__span").forEach(item => {
        item.style.textDecorationColor = "transparent";
    });

    bucle_thickness();
}

bucle_thickness();