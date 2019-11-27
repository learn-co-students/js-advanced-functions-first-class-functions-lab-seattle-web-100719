// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  let drivers = [arr[0], arr[1]];
  return drivers;
};

const returnLastTwoDrivers = function(arr) {
  let drivers = [arr[arr.length - 2], arr[arr.length - 1]];
  return drivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
  return function(fare) {
    return fare * int;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
