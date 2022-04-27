class ExplorerService{
  static filterByMission(explorers, mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersInMission;
  }
  static getAmountOfExplorersByMission(explorers, mission){
    const numberOfExplorersByMission = this.filterByMission(explorers, mission).length;
    return numberOfExplorersByMission;
  }
}
module.exports = ExplorerService;