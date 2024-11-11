function HouseKeeper(yearOfExperince, name, cleaningReprtoire) {
  this.yearOfExperince = yearOfExperince;
  this.name = name;
  this.cleaningReprtoire = cleaningReprtoire;
  this.clean = function () {
    alert("Cleaning in Proccess!");
  };
}

/*This Will Create a new HouseKeeper Object
it can do clean Function, it will alert the client.
*/

// can create object with 
// var houseKeeper = new HouseKeeper(5, "John", ["Vacuum", "Mop]);

// can access clean function by houseKeeper.clean();


