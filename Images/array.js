


let names=["hello","hi","abhi","charan","rana"]
console.log(names);

const greet=() =>{
    console.log("harllo wor,ld");
}

greet();

//function add(a,b){
    //return a*b;
//}

//console.log(add(2,3));

//const animal={};
//animal.fn="sujith"
//console.log(animal);

//const animals="ss";
//animal[animals]="xx";
//console.log(animal);

//cons

const person = {
    fn:"abhi",
    sn:"sarma",
};

const details ={
    age:30,
    email:"afaf",
}

const merge = Object.assign({},person, details);

console.log(merge);

const add =(a,b) =>{
    return  a*b;
    

}

console.log(add(2,3));

for (let i in person){
    console.log(i,person[i]);
}

