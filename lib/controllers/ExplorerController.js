const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorer(){
      const explorers = Reader.readJsonFile("explorers.json");
      return explorers;
    }
    static getExplorerByMission(mission){
        const explorers = this.getExplorer();
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
    static getFilterStack(stack){
      const explorers = this.getExplorer();
      const filterStack = ExplorerService.filterByStack(explorers, stack);
      return filterStack;
    }
}
module.exports = ExplorerController;