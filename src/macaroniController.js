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



const show = (monsters, monsterId) => {

    const monster = monsters.find((monster) => monster.id === monsterId)
    const priceInDollars = (monster.priceInCents / 100).toFixed(2)
    return `${monster.id}: Macaroni Monster ${monster.name} is priced at $${priceInDollars}`

}


module.exports = { create, index, show}