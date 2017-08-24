var friends = require('../data/friends');
var currentMatch = require('../data/match');


module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.get("/api/match", function(req, res){
        res.json(currentMatch);
    });


    app.post("/api/friends", function(req, res){
       
    var currentFriend = req.body;
    var totalDifference = [];
    var bestMatch;

    findScoreDifferences()
    findBestMatch(totalDifference, friends);
    res.json(true);
    





    function findScoreDifferences(){
    for(i=0; i< friends.length; i++){
        var differencesArray = [];
        
        for(j=0; j < friends[i].scores.length; j++){
            
            var differences = Math.abs(friends[i].scores[j] - currentFriend.scores[j]);
            differencesArray.push(differences);
            }
            sumArray(differencesArray, totalDifference);
        }
        }


    function findBestMatch(arr, friendsArray){
        
        var smallest = arr[0];
        var matchIndex;
        for (i=0; i<arr.length; i++){
            if (arr[i]<smallest){
                smallest = arr[i];
                matchIndex = i;
            }
        }
        for(j=0; j<friendsArray.length; j++){
            if(matchIndex === j){
               bestMatch = friendsArray[j];
               currentMatch.push(bestMatch);
            }
        }
        
        console.log(bestMatch);
        
    }

    function sumArray(arr, resultHolder ) {
        var total = 0;
        arr.forEach(function(element){
            total += element;
        })
        resultHolder.push(total);
    }

});

};



