window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.documentElement.scrollWidth > 1439){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 427){
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50%";
        }
    }
    if(document.documentElement.scrollWidth < 1025){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 685){
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50%";
        }
    }
    
    if(document.documentElement.scrollWidth < 769){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 940){
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50%";
        }
    }

    if(document.documentElement.scrollWidth < 426){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 1453 ){
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50%";
        }
    }
}