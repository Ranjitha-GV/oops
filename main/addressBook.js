var prompt = require('prompt-sync')();
var utility = require('/home/d/Desktop/labsfirst/oops/utility/addressUtility.js');
var fs=require('fs');
var data = fs.readFileSync('/home/d/Desktop/labsfirst/oops/main/addressBook.json');
var arrayOfObjects = JSON.parse(data);
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;

class Address
{
    constructor()
        {
            
        }
    createAddress()
    {
        console.log("Please enter all the following information to create a address profile");
                var name = prompt("Please enter your first name: ");
                var lastName = prompt("Please enter your last name: ");
                if(nameRestriction.test(name) == false && name.length>3 &&  nameRestriction.test(lastName) == false && lastName.length>3) 
                {
                    console.log("Invalid name!");
                    return false;
                }
                console.log("Please enter your address");
                var street = prompt("Street: ");
                var city = prompt("City: ");
                if(nameRestriction.test(city) == false) 
                {
                    console.log("Invalid name!");
                    return false;
                }
                var state = prompt("State: ");
                if(nameRestriction.test(state) == false) 
                {
                    console.log("Invalid name!");
                    return false;
                }
                var nation = prompt("Nationality: ");
                if(nameRestriction.test(nation) == false)
                {
                    console.log("Invalid name!");
                    return false;
                }
                var zip = prompt("Zip/Postal code: ");
                if(contactRestriction.test(zip) == false)
                        {
                            console.log("Invalid number!");
                            return false;
                        }

                var phoneNum = prompt("Phone number: ");
                if(contactRestriction.test(phoneNum) == false  || phoneNum.length !=10 )
                                        {
                                            console.log("Invalid number!");
                                            return false;
                                        }
                arrayOfObjects.Person.push({
                    Name: name,
                    LastName: lastName,
                    Address:{
                        Street: street,
                        City: city,
                        State: state,
                        Nation: nation,
                        Zip: zip,
                        PhoneNum: phoneNum
                    }
                })
                fs.writeFile('/home/d/Desktop/labsfirst/oops/main/addressBook.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                    if (err) throw err
                   console.log('Done!')
                })
           

                console.log("Address updated succesfully!");
                console.log("Your information as per our record is: \r\n First Name: "+name+"\r\nLast Name: "+lastName+"\r\nStreet: "+street+"\r\nCity: "+city+"\r\nState: "+state+"\r\nNationality: "+nation);
    }
                          compare1(a, b) 
                        {  
                            if (a.LastName.toLowerCase() < b.LastName.toLowerCase()) {  
                              return -1;  
                            }  
                            if (a.LastName.toLowerCase() > b.LastName.toLowerCase()) {  
                              return 1;  
                            }    
                            return 0;  
                          }
                          sorting()
                          {
                            console.log(arrayOfObjects.Person.sort(this.compare1));
                          }
                           
    openProfile()
    {   var temp = -1;
        if(arrayOfObjects.Person.length > 0)
        {
            for(var i=0;i<arrayOfObjects.Person.length;i++)
            {
                console.log(arrayOfObjects.Person[i]);
            }
            var update = prompt("Please enter the name of profile: ");
            for(var k=0; k<arrayOfObjects.Person.length;k++)
            {

                if(update == arrayOfObjects.Person[k].Name)
                {   temp = k;
                    console.log("Please select an option to modify your profile ");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Add");
                    console.log("4: Sort");
                    console.log("5: Save");
                    console.log("6: Quit");
                    var choice2 = prompt("Please enter your choice: ");
                    
                    switch(parseInt(choice2))
                    {
                        case 1 : 
                                console.log("What do you want to update? ");
                                console.log("1: Street");
                                console.log("2: City");
                                console.log("3: State");
                                console.log("4: Nation");
                                console.log("5: Zip code");
                                console.log("6: Phone");
                                console.log("7: Exit");
                                var choice3 = prompt("Please enter your choice: ");
                                switch(parseInt(choice3))
                                {
                                    case 1:
                                    var sUpdate = prompt("Enter the new street number: ");
                                    if(nameRestriction.test(sUpdate) == false && sUpdate.length>3) 
                                        {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":{
                                            "Street": sUpdate,
                                            "City": arrayOfObjects.Person[k] ["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k] ["Address"].PhoneNum
                                        }

                                        }
                                        arrayOfObjects.Person[k]=obj;
                                    
                                    save();

                                    break;

                                    case 2:
                                    var cUpdate = prompt("Enter the new city name: ");
                                    if(nameRestriction.test(cUpdate) == false && cUpdate.length>3) 
                                        {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":{
                                            "Street": arrayOfObjects.Person[k] ["Address"].Street,
                                            "City": cUpdate,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k] ["Address"].PhoneNum
                                        }

                                        }
                                        arrayOfObjects.Person[k]=obj;
                                    
                                    save();
                                     
                                    break;

                                    case 3:
                                    var stUpdate = prompt("Enter the new state name: ");
                                    if(nameRestriction.test(stUpdate) == false && stUpdate.length>3) 
                                        {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":{
                                            "Street": arrayOfObjects.Person[k] ["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k] ["Address"].PhoneNum
                                        }

                                        }
                                        arrayOfObjects.Person[k]=obj;
                                    
                                    save();

                                    break;

                                    case 4:
                                    var nUpdate = prompt("Enter the new nation name: ");
                                    if(nameRestriction.test(nUpdate) == false && nUpdate.length>3) 
                                            {
                                                console.log("Invalid name!");
                                                return false;
                                            }
                                        var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":{
                                            "Street": arrayOfObjects.Person[k] ["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": nUpdate,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k] ["Address"].PhoneNum
                                        }

                                        }
                                        arrayOfObjects.Person[k]=obj;
                                    save();

                                    break;

                                    case 5:
                                    var zUpdate = prompt("Enter the new zip code: ");
                                    if(contactRestriction.test(zUpdate) == false )
                                        {
                                            console.log("Invalid number!");
                                            return false;
                                        }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":{
                                            "Street": arrayOfObjects.Person[k] ["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": arrayOfObjects.Person[k] ["Address"].PhoneNum
                                        }

                                        }
                                        arrayOfObjects.Person[k]=obj;
                                    
                                    save();

                                    break;

                                    case 6:
                                    var pUpdate = prompt("Enter the new phone number: ");
                                    if(contactRestriction.test(pUpdate) == false  || pUpdate.length !=10 )
                                        {
                                            console.log("Invalid number!");
                                            return false;
                                        }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":{
                                            "Street": arrayOfObjects.Person[k] ["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k] ["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }

                                        }
                                        arrayOfObjects.Person[k]=obj;
                                    
                                   save();


                                    break;

                                    case 7:
                                            console.log("Exit!");
                                            address();
                                 
                                   break;
                                    }
                                    
                        case 2:
                            var update = prompt("Please enter the index of item you want to purchase: ");
                            delete  arrayOfObjects.Person[update];
                            for(var k=0;k<arrayOfObjects.Person.length;k++)
                            {
                                if(arrayOfObjects.Person[k]==null)
                                {
                                    arrayOfObjects.Person.splice(k,1);
                                }
                            }
                                fs.writeFile('/home/d/Desktop/labsfirst/oops/main/addressBook.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                                    if (err) throw err
                                    console.log('Done!')
                                }) 
                        break;

                        case 3:
                                this.createAddress();
                        break;

                        case 4:

                              this.sorting();
                              save();
                        break;

                        case 5:
                        function save()
                        {
                            fs.writeFile('/home/d/Desktop/labsfirst/oops/main/addressBook.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                                if (err) throw err
                                console.log('File Saved!!')
                            }) 
                        }
                          save();      
                        break;

                        case 6:
                               
                                console.log("Exit");
                                address();
                        break;

                        default:
                        console.log("Please enter valid option");
                        break;
            
        }
    }
}               if(temp == -1)
                {
            
                console.log("Profile not present in the address book! Please create one.");
                address();
            }
    
       }
    
    else
        {
            console.log("No profiles to display!! Please create a new profile!");
            this.createAddress();
       
        }
    }
}

function address()
{
    var a = new Address();
    console.log("//*********ADDRESS BOOK*********//");
    console.log("1: Create Address Profile");
    console.log("2: Open Address Book");
    console.log("3: Exit");
    var choice1 = prompt("Please enter your choice: ");
    switch(parseInt(choice1))
    {
        case 1:
                a.createAddress();
                break;
        case 2:
    
                a.openProfile();
                break;

        case 3:
                console.log("Exit!");
        break;
        default:
        console.log("Please enter a valid option!!");
    }
} 
address();
