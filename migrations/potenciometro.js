const PotentiometerContract = artifacts.require("PotentiometerContract");

module.exports = function (deployer) {
  deployer.deploy(PotentiometerContract);
};
