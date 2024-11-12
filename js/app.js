/**
 * DOM
 * 
 * Document Object Model
 *  -looks like a tree diagram (root, branches, nodes)
 * 
 * Accessing the DOM
 * 
        * byTagNames (p, ul, div)
        * querySelector (.class, id)
        * querySelectorAll (.class, id)
        * byID (id)
        * 
 */

let myName = document.getElementById('myName')
// document.getElementById('myName')


console.log(document.getElementById('myName'))

myName.innerText = 'Janjala'

// console.log(myName);
let hero = 'Superman'
let alias = 'Clark Kent'
let powers = ['super strength', 'x-ray vision', 'super speed', 'heat vision']
let enemies = ['Lex Luthor', 'Doomsday', 'Darkside']

const heroName = document.getElementById('heroName')
heroName.innerText = hero

const aliasName = document.getElementById('aliasName')
aliasName.innerText = alias

const powerList = document.getElementById('powerList')
const enemyList = document.getElementById('enemyList')

//loop through array and create an li for each element then append to powerlist

powerList.forEach(power => {
       // do stuff
       const li = document.createElement('li')
       //console.log(li)
       li.innerText = powerpowerList.appendChild('li')
})

//console.log(powerList);

enemies.forEach(enemy => {
const li = document.createElement('li')

li.innerText = enemy
enemyList.appendChild(li)
})