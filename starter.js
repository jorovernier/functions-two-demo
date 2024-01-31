////////////////////////
////// CALCULATOR //////
////////////////////////

// Declaration Function
function add(num1, num2){
  return num1 + num2
}
// Expression Function
const subtract = function(num1, num2){
  return num1 - num2
}
// Arrow Function
const multiply = (num1, num2) => {
  return num1 * num2
}
// Implicit Return Arrow Function
const divide = (num1, num2) => num1 / num2

// This works because both arguments are numbers:
// console.log(add(6,5))

// This concatenates the 5 to the 6 because the 6 is a string:
// console.log(add('6',5))

// This function has extra code to account for sending in a string instead of a number. The + in front of num1 converts it into a umber data type just like the Number() funciton doesn to num2.

// console.log(Number('hi')) <== returns NaN which is a falsey value

function calculator(num1, num2, callback){
  if(+num1 && Number(num2)){
    num1 = +num1
    num2 = +num2
    return callback(num1, num2)
  } else {
    return 'Invalid input!'
  }
}

// This now works because we cleaned up the inputs:
// console.log(calculator('6', 5, add))

// This hits the else because 'meow' cannot be converted into a number:
// console.log(calculator(13,'meow', divide))

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

// Expression Version
// const applyFlatRateDiscount = function(product, discount) {
//   product.displayPrice = product.basePrice - discount
// }

// Testing the function before the higher order function is made:
// applyFlatRateDiscount(dogProducts[0], 4)
// console.log(dogProducts)

// Higher Order Funciton (accepts a callback) ----------------------------------------------------------------
// This one will add a discount to every item in the specified array.

const applyDiscounts = (arr, callback, discount) => {
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], discount)
  }
}

// applyDiscounts(dogProducts, applyFlatRateDiscount, 2)
// console.log(dogProducts)

// applyDiscounts(catProducts, applyPercentDiscount, .25)
// console.log(catProducts)

// Higher Order Function (accepts a callback) ----------------------------------------------------------------
// This one will add a discount to every item that matches the passed in category in the specified array.

const applyDiscountsByCategory = (arr, category, callback, discount) => {
  for(let i = 0; i < arr.length; i++){
    // We are accessing the category property from each object and comparing it to the category parameter.
    if(arr[i].category === category){
      callback(arr[i], discount)
    }
  }
}

// applyDiscountsByCategory(dogProducts, applyPercentDiscount, 1, .50)
// console.log(dogProducts)

// Higher Order Function (accepts a callback) ----------------------------------------------------------------
// This one will add a discount to every item that has an inventory of less than the passed in amount in the specified array.

const applyDiscountsByInventory = (arr, amount, callback, discount) => {
  for(let i = 0; i < arr.length; i++){
    // We are accessing the inventory property from each object and comparing it to the inventory parameter.
    if(arr[i].inventory < amount){
      callback(arr[i], discount)
    }
  }
}

// applyDiscountsByInventory(30, catProducts, applyFlatRateDiscount, 7)
// console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// Higher Order Function (returns a function) ----------------------------------------------------------------

function makeSandwich(bread){
  return (ingredients) => {
    // This string will use the bread parameter from the parent function, makeSandwich.
    let order = `You ordered a ${bread} bread sandwich with `

    // We need to loop over the ingredients array to access each item.
    for(let i = 0; i < ingredients.length; i++){
      // If there is more than 1 ingredient AND i is equal to the last index number, we will add the item to the order after the word 'and' and finish the string off with a period. Otherwise, if there is only 1 ingredient then we will add that item with a period at the end. If both the other conditions fail, then we'll just add the ingredient with a comma to prepare for the next ingredient.
      if(i === ingredients.length - 1 && i !== 0){
        order += `and ${ingredients[i]}.`
      } else if(ingredients.length === 1){
        order += `${ingredients[i]}.`
      } else {
        order += `${ingredients[i]}, `
      }
    }

    // After the ingredients have been added to the order, we will return it.
    return order
  }
}

let bltIngredients = ['bacon', 'lettuce', 'avacado']

const makeBLT = makeSandwich('toasted white')
// makeBLT is equal to the returned function from the invocation of makeSandwich, with the bread parameter being filled in by 'toasted white'. It can be visualized like this:

// const makeBLT = () => {
//   let order = `You ordered a white bread sandwich with `
//   if condition code goes here...
//   return order
// }
console.log(makeBLT(bltIngredients))

const makeIdiotSandwich = makeSandwich("Chef Ramsay's hands")
console.log(makeIdiotSandwich(['idiot chef']))

// Testing with 2 ingredients:
const makePitaSandwich = makeSandwich('pita')
let gyroIngredients = ['greek steak', 'tzatziki sauce']
console.log(makePitaSandwich(gyroIngredients))