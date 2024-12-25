//document.querySelector('.o-notify').style.animationFillMode = "forwards";
//document.querySelector('.o-notify__time-bar').style.animationFillMode = "forwards";

//document.querySelector('.o-notify').classList.add('animate__animated');

const bucle = () => {
    setTimeout(showPopup, 10000);
}

const showPopup = () => {
    randomUser();

    document.querySelector('.o-notify__time-bar').style.display = "";

    if (document.querySelector('.o-notify').classList.contains('animate__bounceOut')) {
        document.querySelector('.o-notify').classList.remove('animate__bounceOut');
    }
    
    document.querySelector('.o-notify').classList.add('animate__bounceIn');

    //console.log("hola 10 segundos");

    setTimeout(hidePopup, 10000);
}

const hidePopup = () => {

    document.querySelector('.o-notify__time-bar').style.display = "none";

    if (document.querySelector('.o-notify').classList.contains('animate__bounceIn')) {
        document.querySelector('.o-notify').classList.remove('animate__bounceIn');
    } 
    
    document.querySelector('.o-notify').classList.add('animate__bounceOut');

    //console.log("adios 10 segundos");

    bucle();
}

bucle();

function randomUser() {  
    let random_number = Math.floor(Math.random() * (users.length + 1))
  
    if (random_number == users.length) {
      random_number = random_number - 1; //pongo -1 porque se empieza a contar desde 0 los arreglos
    }
  
    let random_user = users[random_number];
  
    document.querySelector('.o-notify__img').src = "./img/compradores/" + random_user["photo"];
    document.querySelector(".o-notify__name").innerText = random_user["name"];
    document.querySelector(".o-notify__country").innerText = random_user["country"];
  
    // console.log(random_user["name"]);
    // console.log(random_user["photo"]);
    // console.log(random_user["country"]);
}
