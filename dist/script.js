const menu = document.querySelector('.toggle__menu');
const nav = document.querySelector('.header__nav ');
const arJAY = document.querySelector(".arjay");

menu.addEventListener("click", () =>{
    menu.classList.toggle("open");
    nav.classList.toggle("open");
    nav.style=("z-index:999");
    nav.style=("transition:.5s ease");
    arJAY.classList.toggle("show");
});

const headerclose = document.querySelector('.header__nav .close');
const headernav = document.querySelector('.header__nav');
const jay = document.querySelector(".arjay");

headerclose.addEventListener("click", () =>{
    headerclose.classList.toggle("open");
    headernav.classList.toggle("open");
    jay.classList.toggle("show");
});


const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3000,
    },
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        400: {
            autoplay: {
                delay: 3000,
              },
        },
    }
     
   });

   const drop_down = document.querySelectorAll(".drop__down .li__head")
    drop_down.forEach((dropd) => {
        dropd.addEventListener("click", () => {
            dropd.nextElementSibling.classList.toggle("open");
            dropd.querySelector("i").classList.toggle("open");
            dropd.parentElement.classList.toggle("active");
        }); 
    });


  //   document.addEventListener("DOMContentLoaded", function () {
  //     const navLinks = document.querySelectorAll(".nav__ul li a"); // Select all navigation links
  //     const currentPage = window.location.pathname; // Get current page path
  
  //     navLinks.forEach(link => {
  //         if (link.getAttribute("href") === currentPage) {
  //             link.classList.add("active"); // Add 'active' class to the current page link
  //         }
  //     });
  // });

  var btnContainer = document.getElementById("navigation");
  var btns = btnContainer.getElementsByClassName("li__head");

  for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active");
      this.className += "active";
    })
  }