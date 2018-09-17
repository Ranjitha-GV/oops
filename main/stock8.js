var prompt = require('prompt-sync')();
var utility = require('/home/d/Desktop/labsfirst/oops/utility/utilityQueue.js');

class Comapany
{
    constructor(totalPrice)
    {
        this.totalPrice = 1;
    }

    buy(num)
    {
        for(var i=0;i<num;i++)
        {
            var Name = prompt("Please enter the item purchased: ");
            var number = prompt("Please enter the number of items purchased: ");
            var price = prompt("Please enter the price per item: ");
            var customer = {
                name: Name,
                number: number,
                price: price
            }
            queue.enqueue(customer);
            console.log("a");
            var totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of all the stocks is "+totalPrice); 
            var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time is "+time);
   } 
}

    
sell()
{
    var num = prompt("Please enter the number of elements you want to purchase: ");
    for(var j=0;j<num;j++)
    {
        queue.dequeue();
    }
    var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The item is sold at "+time);
    
}
accountReport()
{
  queue.printQ();     
  
}
}
    var queue = new utility();
    var d = new Comapany();
    var num = prompt("Please enter the total number of stocks purchased: ");
                d.buy(num);
                d.accountReport();
                d.sell();