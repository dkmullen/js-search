var staff = `{"employees":[ 
  {
    "firstName": "Rack",
    "lastName": "Jackson",
    "gender": "M",
    "age": 24,
    "address": {
        "streetAddress": "126 Yellowbird Ct.",
        "city": "San Jone",
        "state": "CA",
        "postalCode": "39422"
    },
    "phoneNumbers": [
        { "type": "home", "number": "7383627627" }
    ]
  },
  {
    "firstName": "Biff",
    "lastName": "Hooper",
    "gender": "M",
    "age": 33,
    "address": {
        "streetAddress": "704 West 5th Ave",
        "city": "Dallas",
        "state": "TX",
        "postalCode": "77845"
    },
    "phoneNumbers": [
        { "type": "home", "number": "8885654545" }
    ]
  },
  {
    "firstName": "Jill",
    "lastName": "Harrison",
    "gender": "F",
    "age": 41,
    "address": {
        "streetAddress": "998 County Road 51",
        "city": "Glenmont",
        "state": "OH",
        "postalCode": "44628"
    },
    "phoneNumbers": [
        { "type": "home", "number": "3303775481" },
        { "type": "mobile", "number": "3307789898" }
    ]
  },
  {
    "firstName": "Betty",
    "lastName": "Chevy",
    "gender": "F",
    "age": 22,
    "address": {
        "streetAddress": "51 Oak Lane",
        "city": "Columbus",
        "state": "OH",
        "postalCode": "77784"
    },
    "phoneNumbers": [
        { "type": "home", "number": "3303775481" },
        { "type": "mobile", "number": "3307789898" }
    ]
  }
]}`;



let data = JSON.parse(staff);

let rack = data.employees.find(o => o.lastName === 'Jackson');
let ohio = data.employees.filter(o => o.address.state === 'OH');
let young = data.employees.filter(o => o.age < 30);
// console.log(young);