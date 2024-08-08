const Syndicate = artifacts.require("Syndicate");

module.exports = function (deployer) {
  deployer.deploy(Syndicate)
    .then(() => console.log("Syndicate deployed successfully"))
    .catch(error => console.error("Deployment failed:", error));
};
