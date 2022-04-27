const Reader = require("./../lib/utils/Reader");
const FizzbuzzService = require("./../lib/utils/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

describe("Fizzbuzz Test suite",() =>{
    const explorersValidation = FizzbuzzService.applyValidationInExplorer(explorers);
    test.each(explorersValidation)("1) Test applyValidationInExplorer function", (a) => {
    
        if(a.score % 3 ===0 && a.score % 5 === 0)
            expect(a.trick).toBe("fizzbuzz");
        else if(a.score % 3 ===0)
            expect(a.trick).toBe("fizz");
        else if(a.score % 5 ===0)
            expect(a.trick).toBe("buzzz");
        else
            expect(a.trick).toBe(a.score);
    });
});