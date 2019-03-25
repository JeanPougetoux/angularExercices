export class Pokemon {
    name : string;
    type : string;
    speed : number;
    specDef : number;
    specAtk : number;
    def : number;
    atk : number;
    health : number;
    isDead : boolean;

    constructor(_name, _type, _speed, _specDef, _specAtk, _def, _atk, _health) {
        this.name = _name;
        this.type = _type;
        this.speed = _speed;
        this.specDef = _specDef;
        this.specAtk = _specAtk;
        this.def = _def;
        this.atk = _atk;
        this.health = _health;
        this.isDead = false;
    }

    attack(pokemon : Pokemon) {
        if (pokemon.isDead) {
            console.log(pokemon.name + " is already dead ! He can defend.");
            return;
        }
        
        if(this.isDead) {
            console.log(this.name + " is already dead ! He can attack.");
            return;
        }
        
        console.log(this.name + " attacks " + pokemon.name);
        
        pokemon.defend(this);
    }
    
    defend(pokemon : Pokemon) {
        console.log(this.name + " takes " + pokemon.atk + " damages.");
        
        if(this.health <= pokemon.atk) {
            this.health = 0;
            console.log(this.name + " is dead.");
            this.isDead = true;
        }
        else {
            this.health -= pokemon.atk;   
            console.log(this.health + " lifepoints left for " + this.name);
        }
    }
}

export function getFirstAttacker(pokemon1 : Pokemon, pokemon2 : Pokemon) : Pokemon {
    if(pokemon1.speed < pokemon2.speed) {
        return pokemon2;
    }
    else {
        return pokemon1;
    }
}

export function fightBetweenPokemons(pokemon1 : Pokemon, pokemon2 : Pokemon) : Pokemon {
    console.log("START OF MATCH");
    while (!pokemon1.isDead && !pokemon2.isDead) {
        oneTurnFightPokemon(pokemon1, pokemon2);
    }
    
    if(pokemon1.isDead) {
        console.log(pokemon2.name + " win the match !");
        return pokemon2;
    }
    else {
        console.log(pokemon1.name + " win the match !");
        return pokemon1;
    }
    console.log("END OF MATCH");
}

export function oneTurnFightPokemon(pokemon1 : Pokemon, pokemon2 : Pokemon) {
    if(pokemon1 == getFirstAttacker(pokemon1, pokemon2)) {
        pokemon1.attack(pokemon2);
        if(!pokemon2.isDead) {
            pokemon2.attack(pokemon1);
        }
    }
    else {
        pokemon2.attack(pokemon1);
        if(!pokemon1.isDead) {
            pokemon1.attack(pokemon2);
        }
    }
}