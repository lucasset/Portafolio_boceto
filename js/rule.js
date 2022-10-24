let sections = new Array(3);
sections[0] = "home";
sections[1] = "cripto";
sections[2] = "search";


alertSize();
/* para versiones antiguas compatibilidad*/
function alertSize() {
    let myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //No-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    
    let display;
    let card_menu = document.getElementById("card_menu");
    display = card_menu.style.display;
    if (myWidth < 767){
        card_menu.style.display = "none";
    }
    else{
        card_menu.style.display = "block";
    }

  }

function displayMenu(){
    let display;
    let card_menu = document.getElementById("card_menu");
    display = card_menu.style.display;

    if (display == "none"){
        card_menu.style.display = "block";
    }
    else{
        card_menu.style.display = "none";
    }
}
function setColors(i){
    let search;
    let bkgr_body;
    let bkgr_menu;

    if (sections[i] == "home"){
        bkgr_body = "#233D58";
        bkgr_menu = "#233D58";
    }
    else{
        bkgr_body = "#f1f1f1";
        bkgr_menu = "#233D58";
    }
    search = document.getElementById(sections[i]);
    search.style.background = bkgr_body;
    let menu = document.getElementsByTagName("header")[0];
    menu.style.background = bkgr_menu;
}
function navSection(nav){
    
    let search;
    let show;
    

    for (let i=0; i<3; i++){
        search = document.getElementById(sections[i]);
        search.style.display = "none";

        if (sections[i] == nav){
            search.style.display = "block";
            setColors(i);
        }
    }
}

function displaySection(nav){
    //alert("hola");

    let search;
    let show;

    for (let i=0; i<3; i++){
        search = document.getElementById(sections[i]);
        show = search.style.display;

        if (show == "block"){
            search.style.display = "none";
            if (nav == "next"){
                i++;
                if (i>2) i=0;
            }
            if (nav == "prev"){
                i--;
                if (i<0) i=2;
            }
            search = document.getElementById(sections[i]);
            search.style.display = "block";
            break;
        }
    }
    setColors(i);
    
}