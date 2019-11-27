// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
     let arr = [];
     arr.push(drivers[0]);
     arr.push(drivers[1]);
    return arr;
}

const returnLastTwoDrivers = function(drivers){
    let arr = [];
    arr.push(drivers[drivers.length-2]);
    arr.push(drivers[drivers.length-1]);
   return arr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(fare){
        return fare*x
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


let selectDifferentDrivers = function(drivers, twoDrivers){
    return twoDrivers(drivers);
}