const { readJSONFile,
    writeJSONFile } = require('./src/helpers')
    
const { create, index, show, edit, destroy } = require('./src/macaroniController')
const inform = console.log;



function run() {
    const action = process.argv[2];
    const macaroniMonster = process.argv[3];
    let writeToFile = false;
    let updatedMonsters = []
    let allMonsters = readJSONFile("./data", "macMonsters.json")

switch(action) {
    case 'index':
        inform( index(allMonsters) );
        break;
    case 'create':
       updatedMonsters = create(allMonsters, macaroniMonster, process.argv[4], process.argv[5]);
        writeToFile = true;
        break;
    case 'show':
        const oneMonster= show(allMonsters, macaroniMonster);
        inform(oneMonster)
        break;
    case 'update':
        updatedMonsters = edit(allMonsters, macaroniMonster, process.argv[4], process.argv[5], process.argv[6])      
        writeToFile = true;
        break;
    case 'destroy':
        updatedMonsters = destroy(allMonsters, macaroniMonster)
        writeToFile = true
        break;
    case 'total':
        const totalPriceInCents = monsters.reduce((acc, currentMonster) => acc + currentMonster.priceInCents, 0);
        const totalPriceInDollars = (totalPriceInCents / 100).toFixed(2);
        
        inform(`Your grand total for all the Macaroni monsters is $${totalPriceInDollars}`)
        break;
    case 'filter-by-price':
        
    default:
        inform("There was an error")
    

}
if (writeToFile) {
    writeJSONFile('./data', 'macMonsters.json', updatedMonsters)

}
}

run()