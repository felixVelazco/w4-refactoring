class FizzbuzzService{
    static #comparison(number){
        if(number %3 == 0 && number % 5 ==0)
            return "fizzbuzz";
        if(number % 3 ==0)
            return "fizz";
        if(number %5 == 0)
            return "buzz";
        return number;
    }
    static applyValidationInExplorer(explorers){
        const explorersTrick = explorers.map((explorer) => {
            explorer.trick = this.#comparison(explorer.score);
            return explorer;
        });
        return explorersTrick;
    }
    static applyValidationNumber(number){
        const trick = this.#comparison(number);
        return trick;
    }
}
module.exports = FizzbuzzService;