// Code your solution in this file!
function returnFirstTwoDrivers(drivers)
{
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers)
{
    return drivers.slice(drivers.length -2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(num) {
        return num * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn)
{
    return fn(drivers);
}

