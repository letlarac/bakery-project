// função para fazer o carrossel funcionar
function scrollCarousel(){
  document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-div");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function scroll() {
      return document.querySelector(".card").offsetWidth + 16; 
  }

  nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scroll(), behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scroll(), behavior: "smooth" });
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

    let kgInput = document.getElementById('kg-price').addEventListener('input', function () {
        if (this.value === '' || this.value < 1) {
            this.value = 1; 
        }
        finalTotalPrice();
    });

    let kgPrice = parseFloat(document.querySelector('#kg-price').value);
    let totalCakePrice = kgPrice * totalPrice;

    document.getElementById("cake-price").textContent = `R$ ${totalCakePrice.toFixed(2)}`;
  
    document.querySelectorAll('.simple-flavor, .complex-flavor').forEach(function(flavor) {
      flavor.addEventListener("change", flavorPrice);

    });

    document.getElementById("kg-price").addEventListener("input", flavorPrice);

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

  document.querySelectorAll('.check-decor').forEach(function(decor){
    decor.addEventListener("change", finalTotalPrice);
  })

  function finalTotalPrice (){
    let cake = flavorPrice();
    let decor = getDecorPrice();

    let total = cake + decor;
    document.getElementById("total-price").textContent = `R$ ${total.toFixed(2)}`;
  }

  
  flavorPrice()
  getDecorPrice()
  finalTotalPrice()
