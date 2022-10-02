// define function calculateWeightedAverage here to calcuate weighted average

function calculateWeightedAverage(assignmentWeight,assignmentScore){
    var assignmentPercentScore=(assignmentWeight/100)*assignmentScore;
    return assignmentPercentScore;
}

//calling functions
console.log(`The weighted average score is  -: ${calculateWeightedAverage(10,97)}`);
console.log(`The weighted average score is  -: ${calculateWeightedAverage(35, 82)}`);
console.log(`The weighted average score is  -: ${calculateWeightedAverage(10, 60)}`);
console.log(`The weighted average score is  -: ${calculateWeightedAverage(15, 75)}`);
console.log(`The weighted average score is  -: ${calculateWeightedAverage(30, 80)}`);

console.log("Total weighted average score is : "+(calculateWeightedAverage(10,97)+calculateWeightedAverage(35, 82)
                                              +calculateWeightedAverage(10, 60)+calculateWeightedAverage(15, 75)+calculateWeightedAverage(30, 80)))