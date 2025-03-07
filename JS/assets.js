window.addEventListener('DOMContentLoaded', function (){
  new Glider(document.querySelector('.glider'), {
      draggable: true,
      dots:'.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
    },
    responsive: [
      {
      
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
});


