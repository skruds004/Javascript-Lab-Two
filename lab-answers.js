////////////////////////////////
// Easy Going
////////////////////////////////

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////

// for(let i = 0; i <= 200; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// let str = "";
// for(let i = 1; i <= 100; i++) {
//     if(i % 3 == 0) {
//         str += "Fizz";
//     }
//     if(i % 5 == 0) {
//         str += "Buzz";
//     }
//     if(i % 3 != 0 && i % 5 != 0) {
//             str = i;
//     }
//     console.log(str);
//     str = "";
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// plantee[2]++;
// wolfy[3] = "Gotham City";
// dart[3] = [dart[3], "Hawkins"];
// wolfy.shift();
// wolfy.unshift("Gameboy");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for(let turt of turtles) {
//     console.log(turt.toUpperCase());
// }

////////////////////////////////
// Methods Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf("Titanic"));
// favMovies.sort();
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift("The Godfather");
// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
// let slicedMovies = favMovies.slice(parseInt(favMovies.length/2), favMovies.length);
// console.log(slicedMovies);
// console.log(favMovies);
// console.log(favMovies.indexOf("Fast and Furious"));

////////////////////////////////
// Where is Waldo
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1, 1);
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);

////////////////////////////////
// Excited Kitten
////////////////////////////////
let randomNum = 0;
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    if(i % 2 == 0) {
        randomNum = Math.floor(Math.random()*3);
        switch(randomNum) {
            case 0:
                console.log("...human... why you taking pictures of me...?");
                break;
            case 1: 
                console.log("...the catnip made me do it...");
                break;
            case 2:
                console.log("...why does the red dot always get away...?");
                break;
            default:
                break;
        }
    }
}

