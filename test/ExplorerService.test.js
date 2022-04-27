const Reader = require("./../lib/utils/Reader");
const ExplorerService = require('./../lib/utils/ExplorerService');

const explorers = Reader.readJsonFile("explorers.json");

describe('ExplorerService test suite',() =>{
  test('1) Test filterByMission fuction', () => {
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    const nodeStack = explorersInNode.map((explorer) => explorer.mission);
    nodeStack.forEach(element => {
      expect(element).toBe("node");
    });
  })
  test("2) Test getAmountOfExplorersByMission function", () => {
    const numberOfExplorerInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
    expect(numberOfExplorerInNode).toBe(10);
  })
  test("3) Test getExplorersUsernamesByMission function", () => {
    const explorersUsernameInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
    expect(explorersUsernameInNode).not.toBe("");
  })
})