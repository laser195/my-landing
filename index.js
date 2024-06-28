const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //handling dom 
  const btn = document.querySelector('.btn');
  const text = document.querySelector('#text');
  const nav = document.querySelector('.mob-nav');
  const navbar = document.querySelectorAll('.nav-item')
  console.log(navbar)
  const navBtn = document.querySelector('span');
  console.log(navBtn)

  //btn function
 
  //nav functions
  let slider ='off'
 
  const navViwe = ()=>{
    
    if(slider=='off')
        {nav.style.display='block'
        slider = 'on'
        console.log('on')
    }else if(slider=='on')
        {nav.style.display='none'
        slider = 'off'
        console.log('off')
    }
  }
   const navHide = ()=>{
     nav.style.display='none'
     slider = 'off'
   }
   navbar[0].addEventListener('click',navHide)
   navbar[2].addEventListener('click',navHide)
   navbar[1].addEventListener('click',navHide)
  for(let i; i<navbar.length; i++){
    
  }
  navBtn.addEventListener('click',navViwe)
