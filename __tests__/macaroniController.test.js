const { create, index, show, edit, destroy, filterByPrice } = require('../src/macaroniController')

describe('macaroniController', () => {
    let monsters = [];

    beforeEach(() => {
        monsters = [
            { id: '1', name: 'Monster1', typeOfPasta: 'spaghetti', princeInCents: 500 },
            { id: '2', name: 'Monster2', typeOfPasta: 'spaghetti', princeInCents: 1000 },
            { id: '3', name: 'Monster3', typeOfPasta: 'spaghetti', princeInCents: 1500 },
        ] 
    
    })

    test('create a new monster', () => {
        const newMonster = create(monsters, 'Monster4', 'penne', 2000)
        expect(newMonster).toHaveLength(4)
        expect(newMonster[3]).toMatchObject({ name: 'Monster4', typeOfPasta: 'penne', priceInCents: 2000 })
    })
    test('index lists all monsters', () => {
        const result = index(monsters)
        expect(result).toContain('1 Monster1')
        expect(result).toContain('2 Monster2')
        expect(result).toContain('3 Monster3')
    })


    test('show a monster by ID', () => {
        const result = show(monsters, '2')
        expect(result).toBe('2: Macaroni Monster Monster2 is priced at $10.00')
    })
         
    test('edit a monster by ID', () => {
        const updatedMonsters = edit(monsters, '2', 'Monster2Updated', 'lasagna', 1200)
        expect(updatedMonsters[1]).toMatchObject({ name: 'Monster2Updated', typeOfPasta: 'lasagna', priceInCents: 1200})
    })

    test('destroy a monster by ID', () => {
        const updatedMonsters = destroy(monsters, '2')
        expect(updatedMonsters).toHaveLength(2)
        expect(updatedMonsters.find(monster => monster.id === '2')).toBeUndefined()
    })

    test('filter monsters by price greater than tresfold', () => {
        const result = filterByPrice(monsters, 1000, 'less')
        expect(result).toHaveLength(1)
        expect(result[0]).toBe('3: Monster3 is price at $15.00')
    })

    test('filter monsters by price less than threshold', () => {
        const result = filterByPrice(monsters, 1000, 'less')
        expect(result).toHaveLength(1)
        expect(result[0]).toBe('1: Monster1 is priced at $5.00')
    })
   
})
