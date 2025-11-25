const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const API = require("https://pokeapi.co/api/v2");

function showMenu() {
    console.log('\n1. Pokenmon')
    console.log('\n2. Item')
    console.log('\n3. Move')
}

function run() {
    showMenu();
    
}