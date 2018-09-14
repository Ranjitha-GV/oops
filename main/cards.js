"use strict"

function cards()
{
    var arr1 = ["Hearts","Diamonds", "Spades","Clubs"];
    var arr2 = ["Jack", "Queen", "King", "Ace","2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var n = arr1.length * arr2.length;
    var arr3 = new Array(n);


    for (var i = 0; i < arr2.length; i++) 
    {
        for (var j = 0; j < arr1.length; j++) 
        {
            arr3[arr1.length*i + j] = arr2[i] + " of " + arr1[j];
        }
    }


    for (var i = 0; i < n; i++) 
    {
        var random = i + parseInt(Math.random() * (n-i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }


    for (var i = 0; i < 4; i++) {
        console.log();
        console.log("****** Cards receieved by Person "+(i+1)+" is ********");
        console.log();
        for (var j = 0; j < 9; j++)
        {
            var arr = [];
            arr.push(arr3[i+j*4]);
            console.log(arr);
        }
        
    }
    
}
cards();