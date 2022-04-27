// const Reader = require("./../lib/utils/Reader");
// const ExplorerService = require("./../lib/services/ExplorerService");
// const FizzbuzzService = require("./../lib/services/FizzbuzzService");
const ExplorerController = require("./../lib/controllers/ExplorerController");


describe('ExplorerController test suite',() =>{
  const explorersInNode = ExplorerController.getExplorerByMission("node");
  test.each(explorersInNode)("1.%#) Test getExplorerByMission in Node", (explorer) => {
    expect(explorer.mission).toBe("node");
  })

  const explorersInJava = ExplorerController.getExplorerByMission("java");
  test.each(explorersInJava)("2.%#) Test getExplorerByMission in Java", (explorer) => {
    expect(explorer.mission).toBe("java");
  })

  const explorersUsername = ExplorerController.getExplorersUsernamesByMission("node");
  test("3) Test getExplorersUsernamesByMission", () => {
    expect(explorersUsername.length).toBe(10);
  })
})