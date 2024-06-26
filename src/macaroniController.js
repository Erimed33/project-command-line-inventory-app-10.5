const { nanoid } = require('nanoid');
const inform = console.log


// create command
const create = (monsters, monsterName, type, price) => {
    const newMonster = {
        id: nanoid(4),
        name: monsterName,
        typeOfPasta: type,
        priceInCents: parseInt(price, 10),
    
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
    if (!monster) {
        return `Macaroni monster with ID ${monsterId} not found.`
    }
    console.log(`price in cents: ${monsters.priceInCents}`)
    const priceInDollars = (monsters.priceInCents / 100).toFixed(2)
    console.log(`price in cents: $${monsters.priceInCents}`)
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


const edit = (monsters, monsterId, updatedName, updatedType, updatedPrice) => {
    // find the monster index, the number of position should be saved it to index
    const index = monsters.findIndex((monster) => monster.id === monsterId)
    if(index > -1) {
        //assign new info
        monsters[index].name = updatedName;
        monsters[index].typeOfPasta = updatedType
        monsters[index].priceInCents = updatedPrice
        inform("Macaroni monster has been successfully updated.")

    } else {
        inform( "Animal is not found, no action was taken")
    }
return monsters
}

const filterByPrice = (monsters, priceThreshold, comparison = 'greater') => {
    return monsters.filter(monster => comparison === 'greater' ? monster.priceInCents > priceThreshold : monster.priceInCents < priceThreshold)
                   .map(monster => `${monster.id}: ${monster.name} is priced at $${(monster.priceInCents / 100).toFixed(2)}`);
};


module.exports = { 
    create, 
    index, 
    show, 
    edit,
    destroy,
    filterByPrice
 }