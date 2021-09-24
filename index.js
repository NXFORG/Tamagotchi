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
    meow() {
        return "Meow";
    }
}

let userPet;

class playTamagotchi {

    run(){
        console.clear()
        this.nameQuestion();
    }

    nameQuestion(){
        ui.question('\nWhat is the name of your pet?\n', input => {
            userPet = new Pet(input);
            console.log(`New pet: ${userPet.name} created.`);
            this.optionSelect();
        })
    }

    //insert function to determine pet type here

    playQuestion(){
        ui.question(`\nDo you want to play with ${userPet.name}? (Y/N)\n`, input => {
            if(input === "Y"){
                if(userPet.hungerLevel <100){
                    console.log(`${userPet.name} is playing...`);
                    userPet.hungerLevel += 50;
                    console.log(`${userPet.name}'s hunger level is now ${userPet.hungerLevel}%`);
                    this.optionSelect();
                } else {
                    console.log(`${userPet.name} is too hungry to play right now`);
                    this.optionSelect();
                }
            } else {
                if(userPet.happinessLevel <20){
                    console.log(`GAME OVER - ${userPet.name} has run away.`);
                    ui.close();
                } else {
                    console.log(`${userPet.name} will come back later.`);
                    userPet.happinessLevel -= 50;
                    console.log(`${userPet.name}'s happiness level is now ${userPet.happinessLevel}%.`);
                    this.optionSelect();
                }
            }
        })
    }

    feedQuestion(){
        ui.question(`\nDo you want to feed ${userPet.name}? (Y/N)\n`, input => {
            if(input === "Y"){
                if(userPet.hungerLevel >= 50){
                    console.log(`${userPet.name} is eating...`);
                    userPet.hungerLevel -= 50;
                    console.log(`${userPet.name}'s hunger level is now ${userPet.hungerLevel}%`);
                    this.optionSelect();
                } else {
                    console.log(`${userPet.name} is not hungry right now.`);
                    this.optionSelect();
                }
            } else {
                if(userPet.hungerLevel >= 100){
                    console.log(`GAME OVER - ${userPet.name} has run away.`);
                    ui.close();
                } else {
                    console.log(`${userPet.name} will come back later.`);
                    console.log(`${userPet.name}'s hunger level is now ${userPet.hungerLevel}%`);
                    userPet.hungerLevel += 50;
                    this.optionSelect();
                }
            }
        })
    }

    optionSelect(){
        ui.question(`\nWhere do you want to go next? (Kitchen/Lounge/Exit)\n`, input => {
            switch(input){
                case "Kitchen": 
                    this.feedQuestion();
                    break;
                case "Lounge":
                    this.playQuestion();
                    break;
                case "Exit":
                    this.successClose();
                    break;
                default:
                    console.log('Input not recognised, please try again.')
                    this.optionSelect();
            }
        })
    }

    successClose(){
        console.log('Thanks for playing');
        ui.close();
    }

//     errorAndClose(err){
//         console.log('\n', err.message, '\n'); // Experiment with err, err.name, err.message, err.stack
//         ui.close();
//     }
    
 }

 let newGame = new playTamagotchi;

 newGame.run();
