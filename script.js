
for (let i = 0; i < 3 ; i++) {
    //console.log(i)  
}

for (let i = 0; i <= 5 ; i++) {
   console.log(i+7)
}

for (let i = 0; i <= 5 ; i++) {
    console.log("###")
 }

 for (let i = 0; i <= 2 ; i++) {
    //console.log(Math.random())
 }

 let result = 0;
 for (let i = 0; i < 8; i++) {
  result = i;
}
console.log(result)

let sample = ["a", "m", "u", "r", "t"];
//let randomNum = Math.floor(Math.random()*5)
//console.log(sample[randomNum])

for (let i = 0; i < 10 ; i+=2) {
    let random = Math.floor(Math.random()*5)
    console.log(sample[random])

 }


 let myArray = ["JS", "MANGO", "true", "React"]
 for (let i = 0; i < myArray.length; i++) {
     console.log(myArray[i]);  
 }

 for (let i = 0; i < myArray.length; i++) {
     if(myArray[i] === "true") {
    console.log("hey true");  
}
 }

let yaşlar = [["fatma",43],["nuh",46],["salih", 18]];
let summ = 0;
for (let i = 0; i < yaşlar.length; i ++) {
   summ += yaşlar[i][1]   
}
console.log(summ)

let arrayList = ["ödev", "yemek", "oyun", "aktivite"];
let string = "";
for (let i = 0; i < arrayList.length; i++) {
    string += i+1+"." + (arrayList[i]).toUpperCase() + " ";

}
console.log(string)

let newArrays = [1,2,5,6,4,5,68,2,1,56,8,54,23,9];
let sum = 0;
/*for (let i = 0; i < newArrays.length; i++) {
    if (newArrays[i] < 10) {
      console.log(newArrays[i]) 
      sum += newArrays[i];  
    }
}*/

for (let i = 0; i < newArrays.length; i++) {
    if (newArrays[i] > 10) {
      console.log(newArrays[i]) 
      continue; 
    }
    sum += newArrays[i];
}
console.log(sum)


for (let i = 0; i < newArrays.length; i++) {
    if (newArrays[i] > 10) {
      console.log(newArrays[i]) 
      break; 
    }
    sum += newArrays[i];
}
console.log(sum)