const nav = document.querySelector('#nav');
    const navBtn = document.querySelector('#nav-btn');
    const navBtnImg = document.querySelector('#nav-btn-img');
    
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtnImg.src = "./img/icons/nav-close.svg";
        } else {
            navBtnImg.src = './img/icons/nav-open.svg';
        }
    }


$(function(){
    $('.rev-slide').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // Адаптив
          
        ]
      });
})

