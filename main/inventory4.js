var fs = require('fs')
var prompt = require('prompt-sync')();
function stock()
{
    console.log("1: Add to inventory");
    console.log("2: Delete from inventory");
    console.log("3: Exit");
    var choice = prompt("Please enter your choice: ");
    var arrayOfObjects,totalPrice=1;
    fs.readFile('/home/d/Desktop/labsfirst/oops/main/data.json', 'utf-8', function(err,data){
        if (err) throw err
    arrayOfObjects = JSON.parse(data);
    switch(parseInt(choice))
    { 
    case 1:
    var num = prompt("Please enter the total number of stocks: ");
    for(var i=0;i<num;i++)
    {
    var Name = prompt("Please enter the item you want to add: ");
    var weight = prompt("Please enter the number of Kgs: ");
    var price = prompt("Please enter the price per Kg.: ");
	arrayOfObjects.stock.push({
		Stockname: Name,
        shareNumber: weight,
        Price: price
	})
    totalPrice = parseInt(num) * parseInt(price);
    console.log("The total price of all the stocks is "+totalPrice);
	console.log(arrayOfObjects)

	fs.writeFile('/home/d/Desktop/labsfirst/oops/main/data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
        console.log('Done!')
    })
   }

 
    break;

    case 2:
    var del = prompt("Please enter the index of item you want to delete from the inventory: ");
    delete  arrayOfObjects.stock[del];
    fs.writeFile('/home/d/Desktop/labsfirst/oops/main/data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
        console.log('Done!')
    })
    break;
      
    case 3:
    console.log("Exit!!");
    break;

    default:
    console.log("Please enter a valid input!");
    break;
}
});
}
stock();