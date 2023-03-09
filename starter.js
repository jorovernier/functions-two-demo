////////////////////////
////// CALCULATOR //////
////////////////////////

// Implicit Return Arrow Function
const add = (num1, num2) => num1 + num2

// Arrow Function
const subtract = (num1, num2) => {
  return num1 - num2
}

// Expression Function
const mulitply = function(num1, num2){
  return num1 * num2
}

// Declaration Function
function divide(num1, num2){
  return num1 / num2
}

// console.log(Number('f')) <== returns NaN which is a falsey value

const calculator = (num1, num2, callback) => {
  if(Number(num1) && +num2){
    num1 = +num1
    num2 = +num2
    return callback(num1, num2)
  } else {
    console.log('You need to send in numbers only.')
  }
}

const result = calculator(6, 3, add)
// console.log(result)
const result2 = calculator('9', 7, mulitply)
// console.log(result2)
const result3 = calculator(6, 3, (yay, wee) => yay + wee)
// console.log(result3)

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// Base Funcitons ----------------------------------------------------------------
// We will use these as the callback functions.

function applyPercentDiscount(product, discount){
  product.displayPrice = product.basePrice * (1 - discount)
}
function applyFlatRateDiscount(product, discount){
  product.displayPrice = product.basePrice - discount
}

// applyFlatRateDiscount(dogProducts[0], 4)
// console.log(dogProducts)

// Higher Order Funciton (accepts a callback) ----------------------------------------------------------------
// This one will add a discount to every item in the specified array.

const applyDiscounts = (arr, callback, discount) => {
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], discount)
  }
}

// applyDiscounts(dogProducts, applyFlatRateDiscount, 3)
// console.log(dogProducts)

// applyDiscounts(catProducts, applyPercentDiscount, .25)
// console.log(catProducts)

// Higher Order Function (accepts a callback) ----------------------------------------------------------------
// This one will add a discount to every item that matches the passed in category in the specified array.

const applyDiscountsByCategory = (arr, category, callback, discount) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].category === category){
      callback(arr[i], discount)
    }
  }
}

// applyDiscountsByCategory(dogProducts, 1, applyFlatRateDiscount, 3)
// console.log(dogProducts)

// Higher Order Function (accepts a callback) ----------------------------------------------------------------
// This one will add a discount to every item that has an inventory of less than the passed in amount in the specified array.

const applyDiscountsByInventory = (arr, callback, amount, discount) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].inventory < amount){
      callback(arr[i], discount)
    }
  }
}

// applyDiscountsByInventory(catProducts, applyPercentDiscount, 35, .50)
// console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// Higher Order Function (returns a function) ----------------------------------------------------------------

function makeSandwich(bread){
  return function(ingredients){
    let order = `You ordered a ${bread} bread sandwich with`

    for(let i = 0; i < ingredients.length; i++){
      order += ` ${ingredients[i]}`
    }

    return order
  }
}

let makeBLT = makeSandwich('toasted white')
console.log(makeBLT(['bacon', 'lettuce', 'tomato']))