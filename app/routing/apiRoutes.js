
var friends = require('../data/friends');


module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
       
    var currentFriend = req.body;
    var totalDifference = [];
    var bestMatch;

    findScoreDifferences()
    findBestMatch(totalDifference, friends);
    res.json(true);
    console.log(totalDifference);





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
        for (var i=0; i<arr.length; i++){
            if (arr[i]<smallest){
                smallest = arr[i];
                matchIndex = i;
            }
        }
        for(j=0; j<friendsArray.length; j++){
            if(matchIndex === j){
               bestMatch = friendsArray[j];
            }
        }
        console.log(smallest);
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



