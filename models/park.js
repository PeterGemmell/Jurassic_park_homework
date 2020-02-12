const Park = function (name, ticket_price, dinosaurs) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}



Park.prototype.addDinosaur = function (dinosaur1) {
this.dinosaurs.push(dinosaur1)
};

Park.prototype.removeDinosaur = function (dinosaur1) {
this.dinosaurs.pop(dinosaur1);
};


module.exports = Park;
