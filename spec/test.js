// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    car1 = new Car("Aston", "DB9", 2004, "blue");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){

    });
  });

  describe('#state', function(){
    it('should initially be off', function(){

    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){

    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){

    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){

    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      car1.sale("Peter");  
      expect(car1.previousOwners).to.eql(["manufacturer"]);
    });

    it('should update currentOwner with the new owner', function(){
      car1.sale("Peter");  
      expect(car1.currentOwner).to.equal("Peter");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
    car1.paint("red");
    expect(car1.color).to.equal("red");
    });
  });

  describe('#start', function(){
    it('should update the carRunning to on', function(){
      car1.start();
      expect(car1.carRunning).to.equal(true);
    });
  });

  describe('#off', function(){
    it('should update the carRunning to off', function(){
      car1.off();
      expect(car1.carRunning).to.equal(false);
    });
  });

  describe('#driveTo', function(){
    it('should return "Driving to Cuba." only when the carRunning is true', function(){
      car1.carRunning = true;
      expect(car1.driveTo("Cuba")).to.equal("Driving to Cuba.");
    });

  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      car1.carRunning = false;
      expect(car1.park()).to.equal("Parked!!");
      //  });
      // it('should make sure to only work when the car is off', function(){
      // car1.carRunning = true;
      // expect(carRunning.park).to.equal("");
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      car1.carRunning = true;
      car1.pickUp("Peter");  
      expect(car1.passengers).to.eql(["Peter"]);
    });

    it('should not modify the passengers array if car is off', function(){
      car1.carRunning = false;
      car1.pickUp("Peter");  
      expect(car1.passengers).to.eql([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      car1.carRunning = true;
      car1.passengers = ["Peter"];
      car1.dropOff("Peter");
      expect(car1.passengers).to.eql([]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      car1.carRunning = false;
      car1.passengers = ["Peter"];
      car1.dropOff("Peter");
      expect(car1.passengers).to.eql(["Peter"]);
    });
  });

});


