// FORTUNE TELLER
var num_children = "2";
var partner = "Elena";
var geo_location = "Skopje";
var job_title = "Economist";

console.log ("You will be an "+job_title+" in "+geo_location+", and married to "+partner+" with "+num_children+" children");
console.log ("You will be an ${job_title} in ${geo_location}, and married to ${partner} with ${num_children} children");



// 2. The Age Calculator
var birth_year = 1990;
var future_year = 2026;
var age =future_year - birth_year;

console.log("I will be either "+age+" or "+(age-1)+" in "+future_year+"");
console.log('I will be either ${age} or ${age-1} in ${future_year}');



// 3. The Lifetime Supply Calculator
var current_age = 32;
var max_age = 50;
var per_day = 3;
var result = (max_age-current_age)*365*3;

console.log("You will need "+result+" to last you until the ripe old age of "+max_age+"");



// 4. The Geometrizer
var radius = 3;
var circumference = ((Math.PI) * 2 * radius);
var area = ((Math.PI) * radius * radius);

console.log("The circumference is "+circumference+"");
console.log("The area is "+area+"");



// 5. The Temperature Converter
var celsius = 30;
var celsiusInFahrenheit = (celsius * 9) / 5 + 32;
console.log(""+celsius+"°C is "+celsiusInFahrenheit+"°F");

var fahrenheit = 50;
var fahrenheitIncelsius = (fahrenheit - 32) * 5 / 9;
console.log(""+fahrenheit+"°F is "+fahrenheitIncelsius+"C°");


