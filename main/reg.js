
function validate()
{
    var prompt =require('prompt-sync')();
    var regex =require("regex");
    var str = "Hello <<name>>, We have your fullname as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.";
    var str2 = "Thank you BridgeLabz dd-mm-yyyy.";
    // var regex = new Regex();
    var dateRes=new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
    var name = prompt("Please enter your name: ");
    var fullName = prompt("Please enter your full name: ");
    var contactNum = prompt("Please enter your contact number: ");
    var date = prompt("Please enter todays date: ");
    console.log("Thank you! BridgeLabz "+date);
    nameRestriction = /[a-b]/ig;
    contactRestriction = /[0-9]/ig;
    
    if(nameRestriction.test(name) && nameRestriction.test(fullName))
    {
        if(contactRestriction.test(contactNum))
        {
            if(dateRes.test(date))
            {
                var result = str.replace(/<<name>>/,name);
                var result1 = result.replace(/<<fullName>>/,fullName);
                var result2 = result1.replace(/<<91­xxxxxxxxxx>>/,contactNum);
                var result3 = str2.replace(/<<dd-mm-yyyy>>/,date);
                console.log(result2+" "+result3);
            }
        }
    }
    
}
validate();