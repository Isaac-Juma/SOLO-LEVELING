// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('SOLO-LEVELING');

// Create a new document in the collection.
db.getCollection('Players').insertOne({
    Name: 'Ethan Hunt',
    JoinedDate: new Date('2026-01-10'),
    Class: 'Warrior',
    Level: 5,
    Skills: ['Swordsmanship', 'Shield Defense', 'Tactical Planning'],
    Inventory: {
        Silver: 250,
        Items: ['Health Potion', 'Iron Sword', 'Wooden Shield']
    }

});
