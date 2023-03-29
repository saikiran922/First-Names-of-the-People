const fullNamesObject = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");

const getPeopleInCity = (fullNamesObject) => {
  return firstNames(fullNamesObject);
};

module.exports = getPeopleInCity;
