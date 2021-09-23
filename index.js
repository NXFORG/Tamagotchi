const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Pet {
    constructor(name){
        this.name = name;
        this.hungerLevel = 0;
        this.happinessLevel = 100;
    }
}

class Cat extends Pet {
    //super()

    meow() {
        return "Meow";
    }
}

let userPet;

class playTamagotchi {

    run(){
        console.clear()
        this.firstQuestion();
    }

    firstQuestion(){
        ui.question('\nWhat is the name of your pet?\n', input => {
            userPet = new Pet(input);
            console.log(userPet);
        })
    }

    secondQuestion(){
        ui.question('\nWhat is the name of your pet?\n', input => {
            userPet = new Pet(input);
            console.log(userPet);
        })
    }

//     errorAndClose(err){
//         console.log('\n', err.message, '\n'); // Experiment with err, err.name, err.message, err.stack
//         ui.close();
//     }
    
 }

 let newGame = new playTamagotchi;

 newGame.run();


// let Bob = new Cat("Bob");
// console.log(Bob.meow());