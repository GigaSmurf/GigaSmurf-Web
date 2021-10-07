// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
       
    navbar.classList.toggle("nav-active");
        
     //Animation links
    navLinks.forEach((link, index) => {
       if (link.style.animation) {
           link.style.animation = "";
       } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
          }
       });
     //hamburger animation
    hamburger.classList.toggle("toggle");
   }
    
   }

window.onload = () => navSlide();

function revealGigaSmurf(){
    let server = location.href.lastIndexOf("/");
    let loc = location.href.slice(0,server +1) + "yuumiawe.jpg";
    let loc1 = location.href.slice(0,server +1) + "wick.jpg";
    if (document.getElementById("gigasmurf").src == loc) 
        {
            document.getElementById("gigasmurf").src = "./wick.jpg";
            document.getElementById("giganame").innerHTML = "Dylan Syahputra";
            document.getElementById("gigadesc").innerHTML = "nalyd#1319 - Creator of GigaSmurf";
        }
        else 
        {
            document.getElementById("gigasmurf").src = "./yuumiawe.jpg";
            document.getElementById("giganame").innerHTML = "GigaSmurf";
            document.getElementById("gigadesc").innerHTML = "Multipurpose Discord Bot - Your Personal Sidekick";
        }
}

function change(e){
    var elem = document.getElementById("lolbutton");
    if (elem.value=="More LoL commands") {
        elem.innerHTML = "FF 15";
        elem.value = "FF 15";

        document.getElementById('idShowMe').style.display = 'block'
    }
    else {
        elem.innerHTML = "More LoL commands";
        elem.value = 'More LoL commands'
        document.getElementById('idShowMe').style.display = 'none'
    }
}

