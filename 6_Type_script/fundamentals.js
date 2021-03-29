// strong typing
// Object-oriented features
// compile-time errors
// great tooling
// TypeScript ===> JS
// let log = (message) =>{
//     console.log(message);
// }
// log("message");
// let doSomething = ()=>{
//     let i = 1
//     while(i<=5){
//         console.log(i)
//         i++
//     }
// }
// doSomething()
var a;
var b;
var c;
var d;
var e;
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColoe = Color.Green;
