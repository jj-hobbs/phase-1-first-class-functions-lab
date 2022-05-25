// Code your solution in this file!
// const drivers = ['Antonia','Nuru','Amari','Mo']
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function fareMultiplier(mult){
        return fare * mult
    }
}

function fareDoubler(y) {
    const double = createFareMultiplier(2)(y)
    return double;
}

function fareTripler(y) {
    const triple = createFareMultiplier(3)(y)
    return triple;
}

function selectDifferentDrivers(drivers, func) {
return func(drivers)
}