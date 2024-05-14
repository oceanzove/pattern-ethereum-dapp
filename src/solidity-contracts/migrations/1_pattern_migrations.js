// eslint-disable-next-line no-undef
const Pattern = artifacts.require("Pattern");

module.exports = function (deployer) {
    deployer.deploy(Pattern);
};
