class FizzbuzzService{
  static applyValidationInExplorer(explorers){
    const explorersTrick = explorers.map((explorer) => {
      if(explorer.score %3 == 0 && explorer.score % 5 ==0){
        explorer.trick = "fizzbuzz"
        return explorer;
        //   explorersTrick.trick = "fizzbuzz";
      }
      if(explorer.score % 3 ==0){
        explorer.trick = "fizz"
        return explorer;
      }
      if(explorer.score %5 == 0){
        explorer.trick = "buzz"
        return explorer;  
      }
      explorer.trick = explorer.score;
      return explorer;
    })
    return explorersTrick;
  }
}
module.exports = FizzbuzzService;