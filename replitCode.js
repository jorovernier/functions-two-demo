// Arrow Callbacks ------------------------------------

const innerFn = () => 'I am a callback!'

const anotherInner = () => {
  return 'Hello there'
}

const outerFn = callback => console.log(callback())

outerFn(anotherInner)

// Declaration Callbacks ------------------------------------

let name = 'Joely'

function helloThere() {
  return `Hello, my name is ${name}! `
}

function niceToMeetYou() {
  return ' Nice to meet you!'
}

function greeting(callback1, callback2) {
  let age = 22
  let phrase = `I am ${age} years old.`
  return callback1() + phrase + callback2()
}

// console.log(niceToMeetYou())
console.log(greeting(helloThere, niceToMeetYou))

// Anonymous Callbacks ------------------------------------

function outerFn(callback) {
  console.log(callback())
}

// passing in an anonymous arrow function
outerFn(() => 'Fancy pants string')
// passing in an anonymous declaration function
outerFn(function() { return 'Fancy pants string' })

// Declaration Callbacks with Parameters ------------------------------------

function argFn(arg) {
  return `I am a ${arg}!`
}

function outerArgFn(callback) {
  console.log(callback())
}

outerArgFn(function(){
  return argFn('cool dude')
})

// Arrow Callbacks with Parameters ------------------------------------

const heWasNumberOne = name => `My name is ${name} and I am number 1!`

const outer = callback => {
  console.log(callback())
}

outer(() => heWasNumberOne('Smitty Werbenjagermanjensen'))

// Higher Order Functions ------------------------------------

function createAdder(x) {
  return function(y) {
    return x + y
  }
}

const addFive = createAdder(5)
// This is what the value of the AddFive variable looks like:
// const addFive = (y) => {
//   return 5 + y
// }

const addTen = createAdder(10)
// const addTen = function(y) {
//   return 10 + y
// }

console.log(addFive(12)) // output: 17
// addFive = 5 + 12

console.log(addFive(40)) // output: 45
// addFive = 5 + 45

console.log(addTen(3)) // output: 13
// addTen = 10 + 3