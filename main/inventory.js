"use strict"
var prompt = require('prompt-sync')();
//var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');

function inventory()
{
    var data = fs.readFileSync('inventory.json');
    var jsonGrocery = JSON.parse(data);
    console.log("1: Rice");
    console.log("2: Wheat");
    console.log("3: Pulses");
    var item = prompt("Please enter your choice: ");
    switch(parseInt(item))
    {
        case 1:
        var weight = prompt("Please enter the weight of rice you want to purchase: ");
        for(var i=0;i<jsonGrocery.Rice.length;i++)
        {
        console.log("Per Kg. of "+jsonGrocery.Rice[i].name+" costs "+jsonGrocery.Rice[i].price+" and for "+weight+" Kgs. costs "+weight*jsonGrocery.Rice[i].price);
        }
        break;

        case 2:
        var weight = prompt("Please enter the weight of wheat you want to purchase: ");
        for(var i=0;i<jsonGrocery.Wheat.length;i++)
        {
        console.log("Per Kg. of "+jsonGrocery.Wheat[i].name+" costs "+jsonGrocery.Wheat[i].price+" and for "+weight+" Kgs. costs "+weight*jsonGrocery.Wheat[i].price);
        }
        break;

        case 3:
        var weight = prompt("Please enter the weight of pulses you want to purchase: ");
        for(var i=0;i<jsonGrocery.Pulses.length;i++)
        {
        console.log("Per Kg. of "+jsonGrocery.Pulses[i].name+" costs "+jsonGrocery.Pulses[i].price+" and for "+weight+" Kgs. costs "+weight*jsonGrocery.Pulses[i].price);
        }
        break;

        default:
        console.log("Please select a valid item!!");

    }

}
inventory();