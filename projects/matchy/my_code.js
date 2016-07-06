//Step 1
var animal = {};

animal.species = "Cat";
animal["name"] = "Harp";
animal.noises = [];

console.log(animal);

//Step 2

var noises = [];

noises[0] = "Meow!";
noises.push("Rawr!");
noises.unshift("I'm gonna knock this cup over");
noises[noises.length] = "Feed me, minion!";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//Step 3

animal["noises"] = noises;

animal.noises.push("I'm gonna bite David's foot!");

console.log(animal);

//step 6

var animals = [];

animals.push(animal);

//console.log(animals);

var duck = {
    species: "Duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};

animals.push(duck);

var barqs = {
    species: "Dog - mutt",
    name: "Barq's",
    noises: ["Bark!", "Woof!", "Arf!", "Get off the levee!"]
};

var jackson = {
    species: "Dog - Sheltie",
    name: "Jackson Blue",
    noises: ["Bark!", "Woof!", "Arf!", "Hey Boss someone is on the levee!"]
};

animals.push(barqs);
animals.push(jackson);

console.log(animals);

//Step 7

var friends = [];
//This structure was chosen because arrays are the best lists.

function RandAnimal(array){
    let num = Math.floor(Math.random() * array.length);
    return array[num];
}

friends.push(RandAnimal(animals).name);

console.log(friends);

animal.friends = friends;

//Part 2

//Step 1

function search(name){
    for (let i = 0; i < animals.length; i++){
        if (name === animals[i].name) return animals[i];
    }
    return null;
}

//Step 2

function edit(name, object){
    for (let i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            animals.splice(i, 1, object);
        }
    }    
}

//Step 3

function remove(name){
    for (let i = 0; i < animals.length; i++){
        if (name === animals[i].name) animals.splice(i, 1);
    }
}

//Step 4

function create(object){
    if (!object.name.length > 0) return alert("You need a name");
    if (!object.species.length > 0) return alert("You need a species");
    for (let i = 0; i < animals.length; i++){
        if (object.name === animals[i].name) return alert("You already exist!");
    }
    animals.push(object);
}