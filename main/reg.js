
function validate()
{
    var prompt =require('prompt-sync')();
    var regex =require("regex");
    var result1,result2,result3,fullName;
    var str = "Hello <<name>>, We have your fullname as <<full name>> in our system. ";
    var str1 = "Your contact number is <<91­xxxxxxxxxx>> .";
    var str2 = "Thank you!! BridgeLabz <<dd-mm-yyyy>> ";
    // var regex = new Regex();
    nameRestriction = /[a-z]/ig;
    contactRestriction = /[0-9]/g;
    var name = prompt("Please enter your name: ");
    if(nameRestriction.test(name) && name.length>3) 
    {
        result = str.replace(/<<name>>/,name);
    }
       
    else
    {
        console.log("Invalid name!");
        return false;
    }
    fullName = prompt("Please enter your full name: ");
        if(nameRestriction.test(fullName) && fullName.length>3)
        {
            result1 = result.replace(/<<full name>>/,fullName);
        }
        else
        {
            console.log("Invalid full name!");
            return false;
        }
    var contactNum = prompt("Please enter your contact number: ");
    if(contactRestriction.test(contactNum) == true && contactNum.length == 10)
    {
        result2 = str1.replace(/<<91­xxxxxxxxxx>>/,contactNum);
    }
    else
    {
        console.log("Invalid number!");
        return false;
    }
    console.log(result1+" "+result2);
    var d = new Date();
    var date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    result3 = str2.replace(/<<dd-mm-yyyy>>/, date);
    console.log(result3);   
}
validate();