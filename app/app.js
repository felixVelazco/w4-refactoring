// const fs = require("fs");
const Reader = require("./../lib/utils/Reader");
const ExplorerService = require("./../lib/services/ExplorerService");
const FizzbuzzService = require("./../lib/services/FizzbuzzService");
// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");

const explorersInNode = ExplorerService.filterByMission(explorers, "node");
const numberOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log(explorersInNode);
console.log(numberOfExplorersInNode);
console.log(usernamesInNode);


const fizzBuzzList = FizzbuzzService.applyValidationInExplorer(explorers);
console.log(fizzBuzzList);
