const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers() {
  return drivers.slice(0, 2);
}
function returnLastTwoDrivers() {
  return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(n) {
  return function (fare) {
    return fare * n;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
