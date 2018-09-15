var fs = require('fs')
var prompt = require('prompt-sync')();
var utility = require('/home/d/Desktop/labsfirst/oops/utility/utility.js');
class Account
{
    constructor(arrayOfObjects,totalPrice, amount,report)
    {
        this.totalPrice = 1;
        this.amount = 0;
        this.report=[];
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
            list.add(customer);
            totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of all the stocks is "+totalPrice); 
            var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time is "+time);
   } 
}
    
sell(num)
{
    for(var j=0;j<num;j++)
    {
    var del = prompt("Please enter the index of item you want to purchase: ");
    var result = list.indexOf(del);
    console.log(result);
    if(result != -1)
    {
        list.removeFrom(del);
    }
    }
    var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time is "+time);
    
}
accountReport()
{
  list.printList();     
  
}
}
    var list = new utility();
    var s = new Account();
    var totalPrice=1, amount =0,report=[];
    var num = prompt("Please enter the total number of stocks purchased: ");
                s.buy(num);
                s.sell(num);
                s.accountReport();
