const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
  park = new Park('Bobs Emporium', 20, []);
  dinosaur1 = new Dinosaur('Raptor', 'carnivore', 50);
  dinosaur2 = new Dinosaur('Sabre Tooth Tiger', 'carnivore', 30);
  dinosaur3 = new Dinosaur('Diplodocus', 'omnivore', 100);
  dinosaur4 = new Dinosaur('Troodon', 'carnivore', 40);

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Bobs Emporium');
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = dinosaur1.species;
    assert.strictEqual(actual, 'Raptor');
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.dinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
