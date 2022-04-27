class ExplorerService{
  static filterByMission(explorers, mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersInMission;
  }
  static getAmountOfExplorersByMission(explorers, mission){
    const numberOfExplorersByMission = this.filterByMission(explorers, mission).length;
    return numberOfExplorersByMission;
  }
  static getExplorersUsernamesByMission(explorers, mission){
    const explorersUsername = this.filterByMission(explorers, mission).map((explorer)=> explorer.githubUsername);
    return explorersUsername;
  }
}
module.exports = ExplorerService;