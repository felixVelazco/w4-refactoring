const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
  static getExplorerByMission(mission){
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersByMission = ExplorerService.filterByMission(explorers, mission);
    return explorersByMission;
  }
}
module.exports = ExplorerController;