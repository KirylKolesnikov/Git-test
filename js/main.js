AOS.init();

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

    const nav = document.querySelector('#nav');
    const navBtn = document.querySelector('#nav-btn');
    const navBtnImg = document.querySelector('#nav-btn-img');
    const boby = document.querySelector('body');
    const nav_link = document.querySelectorAll('#clicker');
    
    nav_link.forEach(n => n.addEventListener ("click", closeMenu));
    function closeMenu (){
      nav.classList.remove('open');
      navBtnImg.src = "./img/icons/nav-open.svg";
      

    }

    
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


