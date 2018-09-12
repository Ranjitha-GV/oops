var fs = require('fs')
var prompt = require('prompt-sync')();
function stock()
{
    var Name = prompt("Please enter the stock name in which you want to purchase shares: ");
    var share = prompt("Please enter the number of shares you want to purchase: ");
    fs.readFile('/home/d/Desktop/labsfirst/oops/main/stock.json', 'utf-8', function(err, data) {
	if (err) throw err

	var arrayOfObjects = JSON.parse(data)
	arrayOfObjects.stock.push({
		Stockname: Name,
		shareNumber: share
	})

	console.log(arrayOfObjects)

	fs.writeFile('/home/d/Desktop/labsfirst/oops/main/stock.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Done!')
	})
})

var data = fs.readFileSync('stock.json');
var jsonStock = JSON.parse(data);
for(i=0;i<data.length;i++)
{
    console.log("Stock "+i+" is "+Stockname[i]);
}
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
stock();