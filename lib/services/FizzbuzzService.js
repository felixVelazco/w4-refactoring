class FizzbuzzService{
    static #comparison(number){
        let trick;
        if(number %3 == 0 && number % 5 ==0){
            trick = "fizzbuzz";
            return trick;
        }
        if(number % 3 ==0){
            trick = "fizz";
            return trick;
        }
        if(number %5 == 0){
            trick = "buzz";
            return trick;  
        }
        trick = number;
        return trick;
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