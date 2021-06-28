// ********ARRAY********

//i. An array is an object that can store multiple elements.
// ii.we can create an array using two ways:

// 1. Using an array literal--->

// The easiest way to create an array is by using an array literal []. For example,
// const array1 = ["eat", "sleep"];

// 2. Using the new keyword---->

// we can also create an array using JavaScript's new keyword.
// const array2 = new Array("eat", "sleep");

// iii.we can also store arrays, functions and other objects inside an array. For example,

// const newData = [
//    {'task1': 'exercise'},
//    [1, 2 ,3],
//    function hello() { console.log('hello')}
// ];


// var arr=[1,2,3,"RISHABH",function name(){console.log("hey")},123,obj={name:"Rishabh"}];
// console.log(arr)
// console.log(arr[4])
// console.log(arr[4]())


// const name=new Array(1,2,"Rishabh")
// console.log(name);


// var Person=["Rishabh","Khushi","Rishabh"];
// console.log(Person);
// Person[2]="khushi";
// console.log(Person)
// console.log(Person.length)


// var object={
// name:"RISHABH",
// roll:40,
// class:8
// }
// console.log(object);
// console.log(object.name);
// console.log(object["name"])
// object.add=("Khushi")
// console.log(object)



// var arr=[1,2,3,"RISHABH",function name(){console.log("hey")},123,obj={name:"Rishabh",class:8}];
// console.log(obj.name);
// console.log(arr[6]["class"])


// var arr=[10];
// console.log(arr);
// var arr1=[1,2,3,4,5];
// console.log(arr1)
// var arr3=new Array(10)                 //It is showing some kind of error kindof
// console.log(arr3)                   
// var arr3=new Array(10,9,3,4,4,5)
// console.log(arr3)




// *********METHODS OF ARRAY********


// .toString-ye array ya kisi bhi cheez ko string bnadeta h

// .join("")-ye phle to kisi cheez ko string bnadeta h fhir usk beech m kuch bhi rkhne ka kaam krta h

// .pop()-pop last se element hata deta h

// .shift()-ye element ko front s hata deta h

// .push("")-ye actual array k last ki index m value ko add krdeta h

// .unshift()-ye value ko front m daal deta hai

// delete arr_name[//any number]=ye delete  krdeta hai array ko but drawback ye h ki ye empty space chhod deta h
// na array ko km krta na bdata

// splice-delete ki jgh splice use krte h or add bhi krskta hai or ek saath delete or add bhi krskta h.
// ye ese kaam krta h ki second s saare delete ya second k 5 element  add hounge
// 2nd k baad 2 delete krdo teen add krdo
// splice(iss index p ye add kru,iss index k baad kitne delete kru,uss index k p ye add krns h) 


// .concat(variable_name)-ye do array ko concat/combine krk ek array krdeta h


// .sort()-ye sare elements ko sort krdeta h alphabets k according or numbers k according

// .reverse-ye reverse krne k liye use hota h

// .slice()-ye assign krne k bad jo element hote h unko array s nikal deta h

// .indexOf-ye index ki value btata h or front s dekhta h index ki value,agr vo cheez index m ni h to (-1) print krdeta h

// .indexOf-ye index ki value btata h or peeche s dekhta h index ki value,agr vo cheez index m ni h to (-1) print krdeta h

var arr=["apple","mango","Papaya"]
console.log(arr)

// console.log(arr.toString())


// console.log(arr.join("/"))


// console.log("before",arr)
// arr.pop()
// console.log("after",arr)
// console.log(arr.pop());


// arr.shift();
// console.log("after",arr)
// console.log(arr.shift());


// console.log("before",arr)
// arr.push("banana");
// console.log("after",arr)
// arr.push("banana","orange")
// console.log("too after",arr)


// arr.unshift("litchi");
// console.log(arr);
// console.log(arr.unshift("litchi"))


// delete arr[2];
// console.log(arr)


// arr.splice(1,0,"litchi");
// console.log(arr)
// arr.splice(1,2,"litchi");
// console.log(arr)
// arr.splice(1,2);
// console.log(arr)
// arr.splice(1,2,"cherry")
// console.log(arr)
// arr.splice(1,2);
// console.log(arr)


// var arr1=["lemon","ladyfinger"];
// var arr2=["tomato","potato"];
// var temp=arr.concat(arr1,arr2)
// console.log(temp);


// var arr=["apple","mango","Papaya","apple","papaya"]
// arr.sort();
// console.log(arr)
// var arr=[1000,10,20,30,56,54,41,65];
// arr.sort(function(a,b){
//    return a-b
// });
// console.log(arr)


// arr.reverse()
// console.log(arr)
// var arr=[10,39,69,75,100,16,24];
// arr.sort();
// console.log(arr)


// var temp=arr.slice(1);
// console.log(temp)


// var temp=arr.indexOf("apple");
// console.log(temp)
// var temp1=arr.indexOf("kiwi");
// console.log(temp1)


// var temp=arr.lastIndexOf("apple");
// console.log(temp)
// var temp1=arr.lastIndexOf("kiwi");
// console.log(temp1)







// common example----------->
// arr.push("banana","orange","litchi","cucumber");
// console.log("after",arr);
// arr.shift();
// console.log(arr)
// console.log(arr.shift());
// console.log(arr.pop())
// arr.pop()
// console.log(arr)
// arr.unshift("watermelon");
// console.log("fruits",arr);
// console.log(arr.unshift("melon"))
// arr.splice(1,4,"cherry")
// console.log(arr)
// var arr1=["lemon","ladyfinger"];
//  var arr2=["tomato","potato"];
//  var friutsWithVegetables=arr.concat(arr1,arr2);
//  console.log(friutsWithVegetables)





