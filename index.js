const inform = console.log;

function run() {
    const action = process.argv[2]
    const macaroniMonster = process.argv[3]


switch(action) {
    case "index":
        inform(action, macaroniMonster);
        break;
    case "create":
        inform(action, macaroniMonster);
        break;
    case "show":
        inform(action, macaroniMonster);
        break;
    case "update":
        inform(action, macaroniMonster);
        break;
    case "destroy":
        inform(action, macaroniMonster );
        break;
    case "priceInCents":
        inform(action, macaroniMonster);
        break;
    default:
        inform("There was an error")
    

}

}

run()