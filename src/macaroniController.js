const { nanoid } = require('nanoid');


// create command
const create = (monsters, monsterName, type, price) => {
    const newMonster = {
        id: nanoid(4),
        name: monsterName,
        typeOfPasta: type,
        priceInCents: price,
    
}
console.log("New Monster created:", newMonster)
monsters.push(newMonster)
return monsters
}

// index command
const index = (monsters) => {
    //for every monster id with name, there will be a new line 
    return monsters.map((monster) => monster.id + " " + monster.name ).join(("\n"))


}

//show command

const show = (monsters, monsterId) => {

    const monster = monsters.find((monster) => monster.id === monsterId)
    return `${monster.id}: ${monster.name} cost ${monster.price}`

}


module.exports = { create, index, show}