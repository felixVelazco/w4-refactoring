const Reader = require("./../../lib/utils/Reader");

describe("Reader test suite",() =>{
    test("1) Test readJsonFile function", () => {
        // const explorer = Reader.readJsonFile("./../explorerss.json");
        const explorer = Reader.readJsonFile("test/data/explorers.json");
        expect(typeof explorer).not.toBeUndefined();
    });
});