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

//     nextQuestion(){
//         console.log(`\nWelcome back, ${this.user.name}`);
//         ui.question('What is your favourite colour?\n', input => {
//             try {
//                 if(input === this.user.faveColour){
//                     console.log('Excellent, you may proceed...');
//                     this.showTopSecretInfo();
//                 } else {
//                     throw new SHIELDError(`${this.user.name}'s favourite colour would never be ${input}! Get outta here!`);
//                 } 
//             } catch (err) {
//                 err.shout() // custom error method
//                 this.errorAndClose(err)
//             };
//         })
//     };

//     errorAndClose(err){
//         console.log('\n', err.message, '\n'); // Experiment with err, err.name, err.message, err.stack
//         ui.close();
//     }
    
//     showTopSecretInfo(){
//         console.log("\nVisit https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki for the Top Secret Info\n");
//         ui.close();
//     };
 }

 let newGame = new playTamagotchi;

 newGame.run();


// let Bob = new Cat("Bob");
// console.log(Bob.meow());