// 1. TOP CHOICES ====================================

let colors = ["blue", "white", "black", "yellow", "purple"];

console.log (`My #1 choice is ${colors[0]}`);
console.log (`My #2 choice is ${colors[1]}`);
console.log (`My #3 choice is ${colors[2]}`);
console.log (`My #4 choice is ${colors[3]}`);
console.log (`My #5 choice is ${colors[4]}`);



// 2. PROGRAM LANGUAGES ===============================

let prog_languages = [
    {
        name: "Java",
        founder: {
            name:"James Gosling",
            e_mail: "james@gmail.com"
        },
        founded: "1991" 
    },
    {
        name: "Javascript",
        founder: {
            name: "Brendan Eich",
            e_mail: "brendan@yahoo.com"
        },
        founded: "1995"
    },
    {
        name: "React",
        founder : {
            name: "Jordan Walke",
            e_mail: "jordan@live.com"
        },
        founded: "2013"
    }
];
    
console.log (prog_languages);
console.log (prog_languages[0]);
console.log (prog_languages[1].founder.e_mail);

let C = {
    name: "C++",
    founder: {
        name: "Bjarne Stroustrup",
        e_mail: "bjarne@hotmail.com"
    },
    founded: "1983"
};

prog_languages.unshift (C);

let Pyhton = {
    name: "Pyhton",
    founder: {
        name:"Guido Van Rossum",
        e_mail: "guido@gmail.com"
    },
    founded: "1991"
};

prog_languages.push (Pyhton);

console.log (prog_languages);