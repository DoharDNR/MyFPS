window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.documentElement.scrollWidth > 1439){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 427){
            document.getElementById("pubg-navbar").style.top = "0";
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("pubg-navbar").style.top = "-50%";
            document.getElementById("navbar").style.top = "-50%";
        }
    }
    if(document.documentElement.scrollWidth < 1025){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 685){
            document.getElementById("pubg-navbar").style.top = "0";
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("pubg-navbar").style.top = "-50%";
            document.getElementById("navbar").style.top = "-50%";
        }
    }
    
    if(document.documentElement.scrollWidth < 769){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 940){
            document.getElementById("pubg-navbar").style.top = "0";
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("pubg-navbar").style.top = "-50%";
            document.getElementById("navbar").style.top = "-50%";
        }
    }

    if(document.documentElement.scrollWidth < 426){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 1453 ){
            document.getElementById("pubg-navbar").style.top = "0";
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("pubg-navbar").style.top = "-50%";
            document.getElementById("navbar").style.top = "-50%";
        }
    }
}

function openPage(pageName, elmnt, color){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++){
        tabcontent[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
}