var Slideshow = [    
                { "src" : "resources/index/slider1.jpg"
                },
                { "src" : "resources/index/slider2.jpg"
                },
                { "src" : "resources/index/slider3.jpg"
                }
                ]

ContentFill= function(){
    var template = document.getElementById("template").innerHTML;
    var compiled_template = handlebars.compile(template);

    document.getElementById("template").innerHTML += "resources/index/slider1.jpg";
}








































var slideIndex = 0;
var modal_container = document.getElementsByClassName("modal container");
// Get the button that opens the modal
var open_modal_btn = document.getElementsByClassName("OpenModalBtn");
// Get the <span> element that closes the modal
var close_modal = document.getElementsByClassName("close modal_multi");

showSlides();































function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// When the user clicks the button, open the modal
function set_data_index() {
  for (i = 0; i < open_modal_btn.length; i++) {
    open_modal_btn[i].setAttribute('index', i);
    modal_container[i].setAttribute('index', i);
    close_modal[i].setAttribute('index', i);
  }
}

for (i = 0; i < open_modal_btn.length; i++) {
  open_modal_btn[i].onclick = function () {
    var Index = this.getAttribute('index');
    modal_container[Index].style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  close_modal[i].onclick = function () {
    var Index = this.getAttribute('index');
    modal_container[Index].style.display = "none";
  };


  window.onclick = function (event) {
    var Index = this.getAttribute('index');
    console.log(Index);
    if (event.target == modal_container[Index]) {
      modal_container[index].style.display = "none";
    }

  }

  window.onload = function () {
    set_data_index();
  };

}