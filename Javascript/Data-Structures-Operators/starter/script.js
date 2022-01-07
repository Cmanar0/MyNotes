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

// -------------------- PRACTICE - START -------------------
//Destructuring is a way to break a complex data structure down into a smaller data structure like a variable.
// 1) Simple way to unpack value from an array into separate variables:
const arr = [2, 3, 5]
const a = arr[0]
const b = arr[1]
const c = arr[2]

//Declaring all three variables at the same time:
const [x, y, z] = arr //we are not creating another array - this is just descructuring assignment - it creates variables
// console.log(x, y, z);
// console.log(arr); //the original array is not affected.

// 2) we can use destructuring on objects also:
let [main, secondary] = restaurant.categories
console.log(main, secondary) // -> Italian Pizzeria

//we can extract specific properties by leaving gaps in the variables:
const [first, , third] = restaurant.categories
// console.log(first, third) // -> Italian Vegetarian

//Imagine we want to switch main and secondary categories. If we would like to switch those two variables (main and secondary), then without desctructuring we would have to do it like this:
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary); // -> it should be switched

//with desctructuring we can make it easier like this:
;[main, secondary] = [secondary, main]
console.log(main, secondary) // -> Italian Pizzeria

// 3) using a function (in this case method, because it is inside of the object) that returns an array:
console.log(restaurant.order(2, 0)) // -> (2) ['Garlic Bread', 'Pizza']

const [starter, mainMeal] = restaurant.order(2, 0)
console.log(starter, mainMeal) // -> Garlic Bread Pizza

// 4) Nested destructuring (nested array)
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested;
const [i, , [j, k]] = nested
console.log(i, j, k) // -> 2 5 6

// 5) Default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r) // -> 8 9 1
// -------------------- PRACTICE - END -------------------
