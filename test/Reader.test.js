const Reader = require("./../lib/utils/Reader");

describe('Reader test suite',() =>{
  test('1) Test readJsonFile function', () => {
    const explorer = Reader.readJsonFile("explorers.json");
    expect(typeof explorer).not.toBeUndefined();
  })
})