class ExplorerService{
  static filterByMission(explorers, mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersInMission;
  }
}