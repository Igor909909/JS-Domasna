/// 1. ENTER YOUR AGE

let age = prompt ("Enter your age");
let limit = (18 - age);

if (age >= 18) {
    console.log ('You are old enough to drive.');
} else {
    console.log (`You are not old enough to drive. Please wait ${limit} years.`);
};
parseInt (age);



/// 2. DAYS IN A MONTH

let month = "March"

if (month == "January") {
    console.log ("January has 31 days.");
} else if (month == "February") {
    console.log ("February has 28 days.");
} else if (month == "March") {
    console.log ("March has 31 days.");
}   else if (month == "April") {
    console.log ("April has 30 days.");
} else if (month == "May") {
    console.log ("May has 31 days.");
} else if (month == "June") {
    console.log ("June has 30 days");
} else if (month == "July") {
    console.log ("July has 31 days.");
} else if (month == "August") {
    console.log ("August has 31 days");
} else if (month=="September") {
    console.log ("September has 30 days.");
} else if (month=="October") {
    console.log ("October has 31 days.");
} else if (month=="November") {
    console.log ("November has 30 days.");
} else {
    console.log ("December has 31 days.");
};

// 3. BAND ===================

let num = 3;

if (num == 1) {
    console.log ("It is a solo.");
} else if (num == 2) {
    console.log ("The band is a duo.");
} else if (num == 3) {
    console.log ("The band is a trio");
} else if (num == 4) {
    console.log ("The band is quartet");
};


// 4. SALARY ====================

var salary = 1500;

switch (salary) {
    case 1000:
        console.log("No high school diploma");
        break;
    case 1500:
        console.log("A high school diploma");
        break;
    case 2000:
        console.log("An Associate's degree");
        break;
    case 2500:
        console.log("A Bachelor's degree");
        break;
    case 3000:
        console.log("a Master's degree");
        break;
    case 3500:
        console.log("a Professional degree");
        break;
    case 4000:
        console.log("a Doctoral degree");
        break;
}

