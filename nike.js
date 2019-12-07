window.onload=function(){
 	var hamburger = document.querySelector(".hamburger");
  	var navItems = document.querySelector(".nav-links");
  	var links = document.querySelectorAll(".nav-links li");
  	var line =  document.querySelector(".line1");
  	var circle = document.querySelector(".bg-circle")
  	var sm_Circle = document.querySelector(".sm-circle")
  	var text = document.querySelector('.text-nike');
	var word = text.getElementsByTagName('span');
	var img = document.querySelector('.bg-inner');


  	var i = 0;

  	init();

  	function init(){
  		open();
  		setInterval(rotate,1000);  
  		zoomout();
  		chngclr();
  		 smcolor()
  	}

  	function open(){
	  	hamburger.addEventListener("click", function(){
	  		navItems.classList.toggle("open");
	  		line.classList.toggle("lines")
	  	})
	  	
	}  	
		function rotate(){
		  word[i].style.display = 'none';
		  i = (i + 1) % word.length
		  word[i].style.display = 'initial';
		}

		function zoomout(){
			img.classList.add('onload')
		}


		function chngclr(){
			var colors = ["#41B3A3","#3867d6", "#d63031", "#00a8ff"];
			var a=0;
			setInterval(function(){
	  			circle.style.background = colors[a];
				circle.style.transition = "0.5s ease";
				a++;
				if (a>=colors.length){
				    a=0;
				}
				},1500) 

			}

			function smcolor(){
				var colors = ["#ffeaa7","#fed330", "#0984e3", "#6c5ce7"];
				var a=0;
			setInterval(function(){
	  			sm_Circle.style.background = colors[a];
				sm_Circle.style.transition = "0.5s ease";
				a++;
				if (a>=colors.length){
				    a=0;
				}
				},1500) 
			}

	}
  	