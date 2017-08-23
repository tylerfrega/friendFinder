
var friends = require('../data/friends');


module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
       
    var currentFriend = req.body;
    var totalDifference = [];
    var bestMatch;
   
     
     for(i=0; i< friends.length; i++){
        var differencesArray = [];

         for(j=0; j < friends[i].scores.length; j++){
            
            var differences = Math.abs(friends[i].scores[j] - currentFriend.scores[j]);
            differencesArray.push(differences);

             }
             sumArray(differencesArray, totalDifference);
         }
         
         console.log(totalDifference);
       
        res.json(true);
    });

   

    function sumArray(arr, resultHolder ) {
        var total = 0;
        arr.forEach(function(element){
            total += element;
        })
        resultHolder.push(total);
    }




};



