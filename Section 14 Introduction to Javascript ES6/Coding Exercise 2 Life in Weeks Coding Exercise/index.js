function lifeInWeeks(age){
    var remainingYears = 90-age;
    var remainingMonths = 12*remainingYears;
    var remainingWeeks = 52*remainingYears;
    var remainingDays = 365*remainingYears;
    console.log("You have "+remainingDays+" days, "+remainingWeeks+" weeks, and "+remainingMonths+" months left.");
}