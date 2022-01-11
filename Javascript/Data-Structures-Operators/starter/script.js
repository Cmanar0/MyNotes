'use strict'

// -------------------- DATA - START -------------------

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// Data needed for first part of the section:
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //functions inside of objects are called methods
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  }
}

// -------------------- DATA - END -------------------
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // -------------------- PRACTICE DESCRUCTURING ARRAYS - START -------------------

// //Destructuring is a way to break a complex data structure down into a smaller data structure like a variable.
// // 1) Simple way to unpack value from an array into separate variables:
// const arr = [2, 3, 5]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// //Declaring all three variables at the same time:
// const [x, y, z] = arr //we are not creating another array - this is just descructuring assignment - it creates variables
// // console.log(x, y, z);
// // console.log(arr); //the original array is not affected.

// // 2) we can use destructuring on objects also:
// let [main, secondary] = restaurant.categories
// console.log(main, secondary) // -> Italian Pizzeria

// //we can extract specific properties by leaving gaps in the variables:
// const [first, , third] = restaurant.categories
// // console.log(first, third) // -> Italian Vegetarian

// //Imagine we want to switch main and secondary categories. If we would like to switch those two variables (main and secondary), then without desctructuring we would have to do it like this:
// // const temp = main
// // main = secondary
// // secondary = temp
// // console.log(main, secondary); // -> it should be switched

// //with desctructuring we can make it easier like this:
// ;[main, secondary] = [secondary, main]
// console.log(main, secondary) // -> Italian Pizzeria

// // 3) using a function (in this case method, because it is inside of the object) that returns an array:
// console.log(restaurant.order(2, 0)) // -> (2) ['Garlic Bread', 'Pizza']

// const [starter, mainMeal] = restaurant.order(2, 0)
// console.log(starter, mainMeal) // -> Garlic Bread Pizza

// // 4) Nested destructuring (nested array)
// const nested = [2, 4, [5, 6]]
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested
// console.log(i, j, k) // -> 2 5 6

// // 5) Default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r) // -> 8 9 1

// // -------------------- PRACTICE DESCRUCTURING ARRAYS - END -------------------
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // -------------------- PRACTICE DESCRUCTURING OBJECTS - END -------------------

// // 1) the order of the properties doesn't matter. (in arrays it does)
// const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories) //here we have the variable names same as the property names - it might cause problems as for example in htis case "name" is reserved by javascript and so we should not use it.

// // 2)  destructure object using CUSTOM VARIABLE NAMES
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
// console.log(restaurantName, hours, tags) //

// // 3) Setting DEFAULT VALUES
// const { menu = `"default value - can be array or whatever"`, starterMenu: starters = [] } = restaurant //we both name our custom variable and set a default value in case we dont find it in the object
// console.log(menu, starters)

// // 4) MUTATING VARIABLES
// let a = 111
// let b = 999
// const obj = { a: 23, b: 7, c: 14 }
// ;({ a, b } = obj) // we wrap it into () because we cant start the row with curly {}
// console.log(a, b)

// // 5) Nested objects
// const {
//   fri: { open: o, close: c }
// } = openingHours
// console.log(o, c)

// // 6) Destructuring Objects that are passed in a function (in this case it`s the "orderDelivery" method inside the "restaurant" object)
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// })

// restaurant.orderDelivery({
//   // we don`t specify time nor mainIndex here and so the function will use the default values (defined in the function above)
//   address: 'Via del Sole, 21',
//   starterIndex: 1
// })

// // -------------------- PRACTICE DESCRUCTURING OBJECTS - END -------------------
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // -------------------- PRACTICE THE SPREAD OPERATOR - START -------------------

// // 1) We can use SPREAD OPERATOR to access all it`s values. So basically unpacking all the array values at one.
// const arr = [7, 8, 9]
// // if we want to expand this array with some other elements, normaly we would have to do it like this for example:
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)
// //with the spread operator:
// const newArrSpreadOperator = [1, 2, ...arr] //the three ... take all the values out of this arr array and then write them individually as if we wrote 7, 8 ,9 manually. if we wrote just arr without the three ... - it would import the list not its values
// console.log(newArrSpreadOperator)
// const newMenu = [...restaurant.mainMenu, 'Gnocci'] //we are building a new array here. We are not affecting the original one at all.
// console.log(newMenu)
// // THE DIFFERENCE BETWEEN DESTRUCTURING AND SPREAD OPERATOR IS THAT SPREAD OPERATOR DODESNT CREATE NEW VARIABLES
// // we can only USE SPREAD OPERATOR in places where we would otherwise write values separated by commas.

// // 2) Copy array
// const mainMenuCopy = [...restaurant.mainMenu]

// // 3) Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// // 4) Spread operator doesn`t only work on arrays. It also works on ITERABLES
// //    Iterables are for example: arrays, strings, maps, or sets.
// //    Iterables are NOT objects.

// // 5) Spread operator - STRINGS
// const str = 'Jonas'
// const letters = [...str, ' ', 's.']
// console.log(letters) // -> ['J', 'o', 'n', 'a', 's', ' ', 's.']
// // spread operator will treat the string like array and take its values

// // 6) Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

// // 7) Objects are not Iterables, but spread operator works on it as well since ES2018
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
// console.log(newRestaurant)

// const restaurantCopy = { ...restaurant }
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy)
// console.log(restaurant)

// Rest Pattern and Parameters
// 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]]

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood)

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays)

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum)
// }

// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// const x = [23, 5, 7]
// add(...x)

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
// restaurant.orderPizza('mushrooms')

// // -------------------- PRACTICE THE SPREAD OPERATOR - END -------------------

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // -------------------- PRACTICE SHORT CIRCUITING - START -------------------

// Short Circuiting (&& and ||)

console.log('---- OR ----')
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || '' || 'Hello' || 23 || null)

restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

const guests2 = restaurant.numGuests || 10
console.log(guests2)

console.log('---- AND ----')
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')

console.log('Hello' && 23 && null && 'jonas')

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
// // -------------------- PRACTICE SHORT CIRCUITING - END -------------------

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // -------------------- NULLISH OPERATOR - START -------------------

// The Nullish Coalescing Operator
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests)

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)
