

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.currentOwner = "manufacturer";
  this.previousOwners = [];
  this.carRunning = false;
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.state = function(changeState){
  this.carRunning = !this.carRunning;
};

Car.prototype.start = function(){
  this.carRunning = true;
};

Car.prototype.off = function(){
  this.carRunning = false;
};

Car.prototype.driveTo = function(destination){
  if(this.carRunning === true);
  var driveToString = ("Driving to " + destination + ".");
  console.log(driveToString);
  return(driveToString);
};


Car.prototype.park = function(){
  if(this.carRunning === false);
  var parkedString = ("Parked!!");
  console.log(parkedString);
  return(parkedString);
};

Car.prototype.pickUp = function(name){
  if(this.carRunning === true){
  console.log("Driving to pick up " + name);
  this.passengers.push(name);
  }
};

Car.prototype.dropOff = function(name){
  if(this.carRunning === true && this.passengers.indexOf(name) !== -1){
  console.log("Dropping off " + name);
  // this.passengers.replace(name, "");
  this.passengers.splice(this.passengers.indexOf(name), 1);
  }
};

module.exports = Car;