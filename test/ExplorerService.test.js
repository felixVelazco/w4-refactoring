const Reader = require("./../lib/utils/Reader");
const ExplorerService = require('./../lib/utils/ExplorerService');

const explorers = Reader.readJsonFile("explorers.json");

describe('ExplorerService test suite',() =>{
  test('1) Test filterByMission', () => {
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(10);
  })
  test("2) Test getAmountOfExplorersByMission function", () => {
    
  })
})