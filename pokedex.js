const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
API ='https://pokeapi.co/api/v2/';
function showMenu() {
    console.log('\nSelect an option:');
    console.log('1. Pokemon');
    console.log('2. Item');
    console.log('3. Move');

}

function prompt(cb){
    rl.question("Enter search term: ", (term) => {
        if (!term || term.trim() === '') {
            console.log("Search term cannot be empty.");
            return run();
        } else {
            cb(term.replace(/\s+/g, '-'));
        }
    });
    
}

function searchPoke(term){
    fetch(`${API}pokemon/${term}`)
    .then(response => {
        if(!response.ok){
            console.log(`Error Code: ${response.status}`);
            return run();
            
        }
        response.json().then(data => printPoke(data)).then(() => run());
    })
   
}

function printPoke(json){
    console.log('Pokemon:', json.name);
    console.log('Height:', json.height);
    console.log('Weight:', json.weight);
    console.log('Base Experience:', json.base_experience);
    console.log('Moves:');
    json.moves.forEach(move => {
        console.log(move.move.name);
    });
}

function searchItem(term){
    fetch(`${API}item/${term}`)
    .then(response => {
        if(!response.ok){
            console.log(`Error Code: ${response.status}`);
            return run();
            
        }
        response.json().then(data => printItem(data)).then(() => run());
    })
   

}

function printItem(json){
    console.log('Item:', json.name);
    console.log('Cost:', json.cost);
    console.log('Category:', json.category.name);
    console.log('Effect:', json.effect_entries[0].effect);

}

function searchMove(term){
    fetch(`${API}move/${term}`)
    .then(response => {
        if(!response.ok){
            console.log(`Error Code: ${response.status}`);
            return run();
        }
        response.json().then(data => printMove(data)).then(() => run());
    })
   

}   

function printMove(json){
    console.log('Move:', json.name);
    console.log('Power:', json.power);
    console.log('PP:', json.pp);
    console.log('Type:', json.type.name);
}

function run(){
    showMenu();
    rl.question("", function(option) {
        if(option === '1'){
            prompt(searchPoke);
        } else if(option === '2'){
            prompt(searchItem);
        } else if(option === '3'){
            prompt(searchMove);
        } else {
            run();
        }
        
    });
};

run();  

