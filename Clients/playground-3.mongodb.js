// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('SOLO-LEVELING');

// Create a new document in the collection.
db.getCollection('Players').insertOne({
    name: 'Mayaa Bright',
    JoinedDate: new Date('2026-01-14'),
    Class: 'Mage',
    Level: 1,
    Skills: ['Basic Jogging', 'French Language', 'Light Cooking'],
    Inventory: {
        Silver: 100,
        Items: ['Apple', 'Ovacado', 'Mellon', 'Mango']
    }
    

});
