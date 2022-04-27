const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorersUsernameByMission = this.getExplorerByMission(mission).map((explorer) => {return explorer.githubUsername;});
        return explorersUsernameByMission;
    }
    static getExplorersAmountByMission(mission){
        const explorersAmountByMission = this.getExplorerByMission(mission).length;
        return explorersAmountByMission;
    }
    static getFizzbuzzNumber(number){
      const fizzbuzzNumber = FizzbuzzService.applyValidationNumber(number);
      return {score: number, trick: fizzbuzzNumber};
    }
}
module.exports = ExplorerController;