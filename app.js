//challenge 1 & 2
console.log("==================Coding Challenge #1 #2===================")
const markWeight = 78;
const markHeight = 1.69;
const JohnWeight = 92;
const JohnHeight = 1.95;
let markHigherBMI = false;

let BMI = function(w, h){
    return w/(h ** 2);
}

let Mark = BMI(markWeight, markHeight).toFixed(2);
let John = BMI(JohnWeight, JohnHeight).toFixed(2);

console.log("Mark's BMI = ", Mark);
console.log("John's BMI = ", John);

if(Mark > John){
    markHigherBMI = true;
}

console.log("markHigherBMI = ", markHigherBMI);

if(Mark > John){
    console.log(`Mark's BMI(${Mark}) is higher than John's(${John})`)
}
else{
    console.log(`John's BMI(${John}) is higher than Mark's(${Mark})`)
}

// challenge#3
console.log("==================Coding Challenge #3===================");


(function compare(){
    let avgScore = function (a, b, c){
    return (a + b + c) / 3;
}

let dolphins = avgScore(96, 108, 89);
let koalas = avgScore(88, 91, 110);
console.log(`Dolphins' average score: ${dolphins}`);
console.log(`Koalas' average score: ${koalas}`);

if(dolphins > koalas){
    console.log(`Dolphins won with ${dolphins} points while Koalas have ${koalas}`);
}
else if(dolphins < koalas){
    console.log(`Koalas won with ${koalas} points while Dolphins have ${dolphins}`)
}
else if(dolphins == koalas){
    console.log(`Dolphins draw with Koalas`)
}
})();

console.log("-----------------------");

(function bonus1(){
    let avgScore = function (a, b, c){
    return (a + b + c) / 3;
}

let dolphins = avgScore(97, 112, 101);
let koalas = avgScore(109, 95, 123);
console.log(`Dolphins' average score: ${dolphins}`);
console.log(`Koalas' average score: ${koalas}`);

if(dolphins > koalas && dolphins >= 100){
    console.log(`Dolphins won with ${dolphins} points while Koalas have ${koalas}`);
}
else if(dolphins < koalas && dolphins >= 100){
    console.log(`Koalas won with ${koalas} points while Dolphins have ${dolphins}`)
}
else if(dolphins == koalas){
    console.log(`Dolphins draw with Koalas`)
}
})();

console.log("------------------------");

(function bonus2(){
    let avgScore = function (a, b, c){
    return (a + b + c) / 3;
}

let dolphins = avgScore(97, 112, 101);
let koalas = avgScore(109, 95, 106);
console.log(`Dolphins' average score: ${dolphins}`);
console.log(`Koalas' average score: ${koalas}`);

if(dolphins > koalas && dolphins >= 100){
    console.log(`Dolphins won with ${dolphins} points while Koalas have ${koalas}`);
}
else if(dolphins < koalas && dolphins >= 100){
    console.log(`Koalas won with ${koalas} points while Dolphins have ${dolphins}`)
}
else if(dolphins == koalas && dolphins >= 100 && koalas >= 100){
    console.log(`Dolphins draw with Koalas`)
}
})();

console.log("==================Coding Challenge #4===================");

