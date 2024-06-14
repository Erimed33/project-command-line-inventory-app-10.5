const { nanoid } = require('nanoid');
const inform = console.log


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

const destroy = (monsters, monsterId) => {
    const index = monsters.findIndex((monster) => monster.id === monsterId)
    // if the ID being fed through the parameter is the same as the monster element ID then
    if (index > -1) {
        monsters.splice(index, 1)
        inform("The Macaroni Monster has been successfully removed.")
        return monsters
    } else {
        inform("Macaroni Monster not found, no action taken")
    }
    return monsters
}


module.exports = { 
    create, 
    index, 
    show, 
    destroy }