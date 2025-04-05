function openMenu(){
  document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('open-menu');
    const menuList = document.getElementById('menu-list');
    const links = document.querySelectorAll(".a-link");

    menuButton.addEventListener("click", () => {
      menuList.classList.toggle("show");
      })

      links.forEach(link => {
        link.addEventListener("click", () => {
          menuList.classList.remove("show");
        })
      
      
      })
  })
}

function scrollCarousel(){
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-div");
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    function scroll() {
      const card = carousel.querySelector(".card");
      const style = window.getComputedStyle(card);
      const gap = parseInt(style.marginRight) || 16;
      return card.offsetWidth + gap;
    }
  
    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scroll(), behavior: "smooth" });
    });
  
    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scroll(), behavior: "smooth" });
    });
  
    
    cards.forEach(card => {
      card.style.flex = "0 0 100%"; 
    });
  });
}

scrollCarousel()

 // checando se o sabor é simples 
 function isSimple(){
    return [...document.querySelectorAll('.simple-flavor')].some(flavor => flavor.checked);
  }
    
    // checando se o sabor é complexo
    function isComplex(){
    return [...document.querySelectorAll('.complex-flavor')].some(flavor => flavor.checked);
  }
  
  function flavorPrice(){
    let isSimpleChecked = isSimple();
    let isComplexChecked = isComplex();
    let simplePrice = document.querySelector('.simple-flavor').value;
    let complexPrice = document.querySelector('.complex-flavor').value;
    let totalPrice = 0;

    if (isComplexChecked && isSimpleChecked) {
        totalPrice = parseFloat(complexPrice);
      } else if (isComplexChecked) {
        totalPrice = parseFloat(complexPrice);
      } else if (isSimpleChecked) {
        totalPrice = parseFloat(simplePrice);
      }

    let kgPrice = parseFloat(document.querySelector('#kg-price').value);

    if (kgPrice === 0 || isNaN(kgPrice)){
      document.getElementById("erro-kg").textContent = `Por favor, insira a quantidade de kg.`;
      return;
    } else {
      document.getElementById("erro-kg").textContent = ""
    }
    
    let totalCakePrice = kgPrice * totalPrice;

    document.getElementById("cake-price").textContent = `R$ ${totalCakePrice.toFixed(2)}`;

    return totalCakePrice;
  }
  
  function getDecorPrice(){
    let totalDecorPrice = 0;

    document.querySelectorAll('.check-decor:checked').forEach(function(decorPrice){
        totalDecorPrice += parseFloat(decorPrice.value);
      });

      document.getElementById("decor-price").textContent = `R$ ${totalDecorPrice.toFixed(2)}`;
      return totalDecorPrice;
  }

  

  function finalTotalPrice (){
    let cake = flavorPrice();
    let decor = getDecorPrice();
    let total = cake + decor;

    if (isNaN(cake)){
      return;
    }

    document.getElementById("total-price").textContent = `R$ ${total.toFixed(2)}`;
  }

  function eventListener(){
    document.querySelectorAll('.simple-flavor, .complex-flavor').forEach(function(flavor) {
        flavor.addEventListener("change", finalTotalPrice);
      });
  
      document.getElementById("kg-price").addEventListener("input", finalTotalPrice);

      document.querySelectorAll('.check-decor').forEach(function(decor){
        decor.addEventListener("change", finalTotalPrice);
      })
  }


openMenu()
eventListener()
  flavorPrice()
  getDecorPrice()
  finalTotalPrice()

