let 
    price_hight,
    price_medium,
    price_low,
    
    recapitulate_price_regular,
    recapitulate_price_vip_group,
    recapitulate_price_membership,
    recapitulate_price_certificate,
    recapitulate_price_gift_1,
    recapitulate_price_gift_2,
    recapitulate_price_gift_3,
    recapitulate_price_gift_4,
    recapitulate_price_gift_5;

const prices_peru = () => {
    price_hight = "s/400.00",
    price_medium = "s/200.00",
    price_low = "s/100.00",
    
    recapitulate_price_regular = "s/100 SOLES",
    recapitulate_price_vip_group = "s/25.00 SOLES",
    recapitulate_price_membership = "s/25.00 SOLES",
    recapitulate_price_certificate = "s/20.00 SOLES",
    recapitulate_price_gift_1 = "s/45.00 SOLES",
    recapitulate_price_gift_2 = "s/45.00 SOLES",
    recapitulate_price_gift_3 = "s/50.00 SOLES",
    recapitulate_price_gift_4 = "s/45.00 SOLES",
    recapitulate_price_gift_5 = "s/45.00 SOLES";
};

const prices_usa = () => {
    price_hight = "$100.00",
    price_medium = "$50.00",
    price_low = "$25.00",
    
    recapitulate_price_regular = "$25.00",
    recapitulate_price_vip_group = "$10.00",
    recapitulate_price_membership = "$10.00",
    recapitulate_price_certificate = "$5.00",
    recapitulate_price_gift_1 = "$10.00 DÓLARES",
    recapitulate_price_gift_2 = "$10.00 DÓLARES",
    recapitulate_price_gift_3 = "$10.00 DÓLARES",
    recapitulate_price_gift_4 = "$10.00 DÓLARES",
    recapitulate_price_gift_5 = "$10.00 DÓLARES";
};

const set_prices = () => {
    document.querySelectorAll(".c-seconds-bonds__title-span")[0].textContent = recapitulate_price_gift_1;
    document.querySelectorAll(".c-seconds-bonds__title-span")[1].textContent = recapitulate_price_gift_2;
    document.querySelectorAll(".c-seconds-bonds__title-span")[2].textContent = recapitulate_price_gift_3;
    document.querySelectorAll(".c-seconds-bonds__title-span")[3].textContent = recapitulate_price_gift_4;
    document.querySelectorAll(".c-seconds-bonds__title-span")[4].textContent = recapitulate_price_gift_5;

    document.querySelectorAll(".o-prices__price")[0].textContent = price_hight;
    document.querySelectorAll(".o-prices__price")[1].textContent = price_medium;
    document.querySelectorAll(".o-prices__price")[2].textContent = price_low;

    document.querySelectorAll(".o-prices__price")[3].textContent = price_hight;
    document.querySelectorAll(".o-prices__price")[4].textContent = price_medium;
    document.querySelectorAll(".o-prices__price")[5].textContent = price_low;

    document.querySelectorAll(".c-recapitulate__span")[0].textContent = recapitulate_price_regular;
    document.querySelectorAll(".c-recapitulate__span")[1].textContent = recapitulate_price_vip_group;
    document.querySelectorAll(".c-recapitulate__span")[2].textContent = recapitulate_price_membership;
    document.querySelectorAll(".c-recapitulate__span")[3].textContent = recapitulate_price_certificate;
    document.querySelectorAll(".c-recapitulate__span")[4].textContent = recapitulate_price_gift_1;
    document.querySelectorAll(".c-recapitulate__span")[5].textContent = recapitulate_price_gift_2;
    document.querySelectorAll(".c-recapitulate__span")[6].textContent = recapitulate_price_gift_3;
    document.querySelectorAll(".c-recapitulate__span")[7].textContent = recapitulate_price_gift_4;
    document.querySelectorAll(".c-recapitulate__span")[8].textContent = recapitulate_price_gift_5;

    document.querySelector(".c-recapitulate__span-text-2").textContent = price_hight;
    document.querySelector(".c-recapitulate__text-4").textContent = price_low;
};

let request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co?api-key=68f019edbc34da3d63996660240e36314403d5b8f32da11475612ca9&fields=country_name,country_code'); //API QUE DETECTA EL PAIS (TIENE UN LIMITE PORQUE ESTAS EN LA VERSION GRATUITA) Y LE DIGO QUE ME TRAIGA EL "NOMBRE DEL PAIS" Y EL "CODIGO DEL PAIS"

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () { //ESTO DEMORA UNOS SEGUNDOS EN EJECUTARSE, POR ESO LO PONGO TODO ADENTRO
  if (this.readyState === 4) {
    let ipdata = JSON.parse(this.responseText);

      //EN CASO DE QUE ARROJE "NULL O UNDEFINED" RECIBIRÁ EL VALOR "USA"
      if(ipdata.country_code !== "PE"){
        prices_usa();
        set_prices();
      }else{
        prices_peru();
        set_prices();
      }
    }
  }

request.send();