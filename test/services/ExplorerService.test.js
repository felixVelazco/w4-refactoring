const Reader = require("./../lib/utils/Reader");
const ExplorerService = require("./../lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");

describe("ExplorerService test suite",() =>{
    test("1) Test filterByMission fuction", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        const isEveryMissionNode = explorersInNode.every((explorer) => explorer.mission == "node");
        expect(isEveryMissionNode).toBe(true);
    });
    test("2) Test getAmountOfExplorersByMission function", () => {
        const numberOfExplorerInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(numberOfExplorerInNode).toBe(10);
    });
    test("3) Test getExplorersUsernamesByMission function", () => {
        const explorersUsernameInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsernameInNode).not.toBe("");
    });
    const explorersWithJavascript = ExplorerService.filterByStack(explorers, "javascript");
    test.each(explorersWithJavascript)("4.%#) Test filterByStack fuction", (explorer) => {
        expect(explorer.stacks).toContain("javascript");
    });
});