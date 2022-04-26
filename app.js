const Reader = require("./lib/utils/Reader");
const ExplorerService=require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
//console.log(explorers);

// Aplicación del ExplorerService sobre la lista de explorers
const ExplorersInMission=ExplorerService.filterByMission(explorers, "node")
const NumberExplorersInMission=ExplorerService.getAmountOfExplorersByMission(explorers, "node")
const UsernamesExplorersInMission=ExplorerService.getExplorersUsernamesByMission(explorers, "node")


// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

/*const assignFizzTrick = function(explorer){

    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    } else if(explorer.score%3 === 0){
        explorer.trick = "FIZZ";
        return explorer;
    } else if(explorer.score%5 === 0){
        explorer.trick = "BUZZ";
        return explorer;
    } else{
        explorer.trick = explorer.score;
        return explorer; 
    }
};

const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
//console.log(explorersInNodeAndFizzTrick);
*/