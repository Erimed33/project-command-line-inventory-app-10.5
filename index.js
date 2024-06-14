const { readJSONFile,
    writeJSONFile } = require('./src/helpers')
    
const { create, index, show, destroy } = require('./src/macaroniController')
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
        inform(action, macaroniMonster);
        break;
    case 'destroy':
        updatedMonsters = destroy(allMonsters, macaroniMonster)
        writeToFile = true
        break;
    case 'priceInCents':
        inform(action, macaroniMonster);
        break;
    default:
        inform("There was an error")
    

}
if (writeToFile) {
    writeJSONFile('./data', 'macMonsters.json', updatedMonsters)

}
}

run()