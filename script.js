let infosFoodSelected = "";
let infosDrinkSelected = "";
let infosDessertSelected = "";
let verifyButtonOrder = false;

function selectedFoodOption(chosenFood) {

  const element = document.querySelector(".option-food-selected");
  if (element !== null) {
    element.classList.toggle("option-food-selected");
  }
  chosenFood.classList.add("option-food-selected");

  if(chosenFood.classList.contains("option-food-selected")){
    array = chosenFood.innerText;
    infosFoodSelected = array.split("\n\n")
    infosFoodSelected.splice(1,1);
  }

  activateButton();
  TotalValueOrder();
}

function selectedDrinkOption(chosenDrink) {
  const element = document.querySelector(".option-drink-selected");
  if (element !== null) {
    element.classList.toggle("option-drink-selected");
  }
  chosenDrink.classList.add("option-drink-selected");

  if(chosenDrink.classList.contains("option-drink-selected")){
    array = chosenDrink.innerText;
    infosDrinkSelected = array.split("\n\n")
    infosDrinkSelected.splice(1,1);
  }
  activateButton();
  TotalValueOrder();
}

function selectedDessertOption(chosenDessert) {
  const element = document.querySelector(".option-dessert-selected");
  if (element !== null) {
    element.classList.toggle("option-dessert-selected");
  }
  chosenDessert.classList.add("option-dessert-selected");

  if(chosenDessert.classList.contains("option-dessert-selected")){
    array = chosenDessert.innerText;
    infosDessertSelected = array.split("\n\n")
    infosDessertSelected.splice(1,1);
  }
  activateButton();
  TotalValueOrder();
}

function activateButton(){
  let verifyArray = [infosFoodSelected, infosDrinkSelected, infosDessertSelected];
  console.log(verifyArray);
  for( let i = 0; i < verifyArray.length; i++){
    if(!verifyArray.includes("")){
      document.getElementById("order").style.backgroundColor = '#32B72F';
      verifyButtonOrder = true;
    }
  }
}

let valueFood;
let valueDrink;
let valueDessert;
let valueTotal = Number(0);

function TotalValueOrder(){
  
  for( let i = 0; i < 3; i++){
    
    if(i === 0){
      infosFoodSelected[1] = infosFoodSelected[1].replace("R$","");
      infosFoodSelected[1] = infosFoodSelected[1].replace(",",".");
      valueFood = Number(infosFoodSelected[1]);
    }
    if(i === 1){
      infosDrinkSelected[1] = infosDrinkSelected[1].replace("R$","");
      infosDrinkSelected[1] = infosDrinkSelected[1].replace(",",".");
      valueDrink = Number(infosDrinkSelected[1]);
      
    }
    if(i === 2){
      infosDessertSelected[1] = infosDessertSelected[1].replace("R$","");
      infosDessertSelected[1] = infosDessertSelected[1].replace(",",".");
      valueDessert = Number(infosDessertSelected[1]);
    }
  }
  valueTotal = valueDessert + valueDrink + valueFood;
}

function screenConfirmOrder(){

  let sendElementOrder = document.querySelector(".infos-order");
  sendElementOrder.innerHTML = `
    <div class="order-form">
      <p> R$ ${infosFoodSelected[0]}</p>
      <p> R$ ${infosFoodSelected[1]}</p>
    </div>
    <div class="order-form">
      <p> R$ ${infosDrinkSelected[0]}</p>
      <p> R$ ${infosDrinkSelected[1]}</p>
    </div>
    <div class="order-form">
      <p> R$ ${infosDessertSelected[0]}</p>
      <p> R$ ${infosDessertSelected[1]}</p>
    </div>
    <div class="order-form">
      <p>Total</p>
      <p> R$${valueTotal}</p>
    </div>

  `;

  if(verifyButtonOrder){
    document.getElementById("background-confirm-order").style.display = "initial";
    
  }
}
function confirmOrder(){

  let message = `Olá, gostaria de fazer o pedido:
  - Prato: ${infosFoodSelected[0]}
  - Bebida: ${infosDrinkSelected[0]}
  - Sobremesa: ${infosDessertSelected[0]}
  Total: R$ ${valueTotal}`;

  let messageInfos = encodeURIComponent(message);

  window.open(`https://wa.me/númerodetelefonenowhatsapp?text=${messageInfos}`);
  
}
function cancelOrder(){
  document.querySelector(".background-confirm-order").style.display = 'none';
  valueTotal = 0;
  
  sendElementOrder.innerHTML.replace = `
    <div class="order-form">
      <p> R$ ${infosFoodSelected[0]}</p>
      <p> R$ ${infosFoodSelected[1]}</p>
    </div>
    <div class="order-form">
      <p> R$ ${infosDrinkSelected[0]}</p>
      <p> R$ ${infosDrinkSelected[1]}</p>
    </div>
    <div class="order-form">
      <p> R$ ${infosDessertSelected[0]}</p>
      <p> R$ ${infosDessertSelected[1]}</p>
    </div>
    <div class="order-form">
      <p>Total</p>
      <p> R$${valueTotal}</p>
    </div>

  `;
}