// ax²+bx+c=0
// z=b²-4ac

let a=4;
let b=35;
let c=20;

let value=[a,b,c];

function calculateZ (){
  return Math.pow(b,2)-(4*a*c)
}
let z=calculateZ(value);
console.log(z);




function calculateY (){
  return (-b/(2*a))
};
const y=calculateY (value);
console.log(y);

function calculateX1 (){
return(-b+Math.sqrt(z))/(2*a)
}
const x1=calculateX1(value);
console.log(x1);

function calculateX2 (){
return (-b-Math.sqrt(z))/(2*a)
}
const x2=calculateX2(value);
console.log(x1);



if(z>0){
  alert("This equation has two results "+x1+" and "+x2);
}else if(z=0){
    alert("This equation has one results"+x1+"and"+x2);
}
else alert("This equation doesn't have results");





