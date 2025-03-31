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
  
    if (isComplexChecked && isSimpleChecked) {
      document.getElementById("cake-price").textContent = `R$ ${complexPrice}`;
    } else if (isComplexChecked) {
      document.getElementById("cake-price").textContent = `R$ ${complexPrice}`;
    } else if (isSimpleChecked) {
      document.getElementById("cake-price").textContent = `R$ ${simplePrice}`;
    } else {
      document.getElementById("cake-price").textContent = `R$ 0.00`;
    }
  
    document.querySelectorAll('.simple-flavor, .complex-flavor').forEach(function(flavor) {
      flavor.addEventListener("change", flavorPrice);
    });
  }
  
  function getDecorPrice(){
    let decorValue = document.getElementById('decor-price');
  
    document.querySelectorAll('.check-decor').forEach(function(decorPrice){
      decorPrice.addEventListener("change", function(){
        let currentPrice = parseFloat(decorValue.textContent.replace("R$ ", "")) || 0.00;
        if (decorPrice.checked){
         currentPrice += parseFloat(decorPrice.value);
        } else {
          currentPrice -= parseFloat(decorPrice.value);
        }
  
        decorValue.textContent = `R$ ${currentPrice.toFixed(2)}`;
      })
    })
  
  }

  
  flavorPrice()
  getDecorPrice()
  totalPrice()