window.onscroll = function () { scrollFunction() };
function scrollFunction(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
        document.getElementById("main-header").style.backgroundColor = "white";
        document.getElementById("bottom-header").style.backgroundColor = "white";
        document.getElementById("main-logo").src ="https://nossamobilya.com.tr/wp-content/uploads/2021/12/logo.png";
        document.getElementById("search-btn").style.color = "black";
        document.getElementById("lang-btn").style.color = "black";
        document.getElementById("social-btn").style.color = "black";
        document.getElementById("profil").style.color="black";
        document.getElementById("navbarDropdown").style.color = "black";
        document.getElementById("references").style.color = "black";
        document.getElementById("blog").style.color = "black";
        document.getElementById("contact").style.color = "black";
        
    }
    else{
        document.getElementById("main-header").style.backgroundColor = "transparent";
        document.getElementById("bottom-header").style.backgroundColor = "transparent";
        document.getElementById("main-logo").src = "./img/main-logo.png";
        document.getElementById("profil").style.color = "white";
        document.getElementById("navbarDropdown").style.color = "white";
        document.getElementById("references").style.color = "white";
        document.getElementById("blog").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("search-btn").style.color = "white";
        document.getElementById("lang-btn").style.color = "white";
        document.getElementById("social-btn").style.color = "white";
    }
}