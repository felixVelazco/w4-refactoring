// const Reader = require("./../lib/utils/Reader");
// const ExplorerService = require("./../lib/services/ExplorerService");
// const FizzbuzzService = require("./../lib/services/FizzbuzzService");
const ExplorerController = require("./../lib/controllers/ExplorerController");


describe("ExplorerController test suite",() =>{
    const explorersInNode = ExplorerController.getExplorerByMission("node");
    test.each(explorersInNode)("1.%#) Test getExplorerByMission in Node", (explorer) => {
        expect(explorer.mission).toBe("node");
    });

    const explorersInJava = ExplorerController.getExplorerByMission("java");
    test.each(explorersInJava)("2.%#) Test getExplorerByMission in Java", (explorer) => {
        expect(explorer.mission).toBe("java");
    });

    test("3) Test getExplorersUsernamesByMission", () => {
        const explorersUsernameInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernameInNode).not.toBeUndefined();
    });
    test("4) Test getExplorersAmountByMission", () => {
        const explorersAmountInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(explorersAmountInNode).toBe(10);
    });
    test("5) Test getFizzbuzzNumber (number)", () => {
        const fizzbuzzNumber = ExplorerController.getFizzbuzzNumber(2);
        expect(fizzbuzzNumber.score).toBe(2);
        expect(fizzbuzzNumber.trick).toBe(2);
    });
    test("6) Test getFizzbuzzNumber (fizz)", () => {
        const fizzbuzzNumber = ExplorerController.getFizzbuzzNumber(3);
        expect(fizzbuzzNumber.score).toBe(3);
        expect(fizzbuzzNumber.trick).toBe("fizz");
    });
    test("7) Test getFizzbuzzNumber (buzz)", () => {
        const fizzbuzzNumber = ExplorerController.getFizzbuzzNumber(5);
        expect(fizzbuzzNumber.score).toBe(5);
        expect(fizzbuzzNumber.trick).toBe("buzz");
    });
    test("8) Test getFizzbuzzNumber (fizzbuzz)", () => {
        const fizzbuzzNumber = ExplorerController.getFizzbuzzNumber(15);
        expect(fizzbuzzNumber.score).toBe(15);
        expect(fizzbuzzNumber.trick).toBe("fizzbuzz");
    });
});