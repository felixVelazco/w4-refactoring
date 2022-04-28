const Reader = require("./../lib/utils/Reader");
const FizzbuzzService = require("./../lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

describe("Fizzbuzz Test suite",() =>{
    const explorersValidation = FizzbuzzService.applyValidationInExplorer(explorers);
    test.each(explorersValidation)("1.%#) Test applyValidationInExplorer function", (a) => {

        if(a.score % 3 ===0 && a.score % 5 === 0)
            expect(a.trick).toBe("fizzbuzz");
        else if(a.score % 3 ===0)
            expect(a.trick).toBe("fizz");
        else if(a.score % 5 ===0)
            expect(a.trick).toBe("buzz");
        else
            expect(a.trick).toBe(a.score);
    });

    test("2) Test applyValidationNumber", () => {
        const trick1 = FizzbuzzService.applyValidationNumber(1);
        const trick2 = FizzbuzzService.applyValidationNumber(3);
        const trick3 = FizzbuzzService.applyValidationNumber(5);
        const trick4 = FizzbuzzService.applyValidationNumber(15);

        expect(trick1).toBe(1);
        expect(trick2).toBe("fizz");
        expect(trick3).toBe("buzz");
        expect(trick4).toBe("fizzbuzz");
    });
});