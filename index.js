// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]];
}
const returnLastTwoDrivers = function(array) {
    const length = array.length
    return [array[length - 2], array[length - 1]];
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
const createFareMultiplier = (fare) => {
    return (multiplier) => {
        return fare * multiplier
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (drivers, funct) => {
    return funct(drivers)
}