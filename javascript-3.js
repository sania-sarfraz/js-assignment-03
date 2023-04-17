//--->Swapping two variable
//declear variables
let x=10;
let y=8;

document.write("before swapping: x= "+x+"  y="+y+"<br>")
x=y;
y=x;

document.write("after swapping: x= "+x+"  y="+y)

//array method
///-------------pop &push-----
//pop-->pop() method remove the last element from an array

let myarr=[1,2,4,5,8,33,23];
myarr.pop();
document.write(myarr)

//push--->push() method add the element in the array at the end of array
let myarr=[1,2,4,5,8,33,23];
myarr.push(20);
document.write(myarr)

 //Shift--->shift() method like a pop but it remove the first element from the array and shift other element to the lower index

 let myarr=[1,2,4,5,8,33,23];
myarr.shift();
document.write(myarr)

//unshift--->unshift() method add the first element in the array and unshift older elements. The unshift() method returns the new array length:

let myarr=[1,2,4,5,8,33,23];
myarr.unshift(12);
document.write(myarr)


///delete----->delete create a undefine hole in the array use shift or pop() instead

let myarr=[1,2,4,5,8,33,23];
delete myarr[3];
document.write(myarr)

//splicing---->splice is used to add new element in the array and it can also be used to remove an element from the array by setting parameter

let myarr=[1,2,4,5,8,33,23];
myarr.splice(2,1,"sani","sarfraz");
document.write(myarr)


///Remove element without hole using splice() method
let myarr=[1,2,4,5,8,33,23];
myarr.splice(2,3); ///2 index remove next 2 index
document.write(myarr)


//slice--->slice is used to slice a piece of array into new array

let myarr=[1,2,4,5,8,33,23];
let newarr=myarr.slice(2);
document.write(newarr);

//take 2 parameter--->it define the start and end element(but not including the ending element)
let myarr=[1,2,4,5,8,33,23];
let newarr=myarr.slice(2,5);
document.write(newarr);

//foreach---->foreach() method calls a function for every element in the array


const myarr=[24,23,36.33]
myarr.forEach((item,index)=>item)
document.write(myarr)

//map---->map() method  create a new array calls a function for every element in the array
const myarr=[24,23,36.33]
const newarr=myarr.map((item,index)=>item)
document.write(newarr)


//filter----->The filter() method creates a new array filled with elements that pass a test provided by a function.it does not change the original array

const myarr=[24,23,36,33]
const newarr=myarr.filter((item,index)=>item>24)
document.write(newarr)

//reduce--->The reduce() method executes a reducer function for array element.The reduce() method returns a single value: the function's accumulated result.

const reducearr=myarr.reduce((acc,cur)=>acc+cur)
document.write(reducearr)

//example 2
const newstate=myarr.reduce((total,num)=>total-num)
document.write(newstate)

///some---->some() method return true if any element in the array pass the test.and return false if the function return false for all element in the array
const newarr=myarr.some((item)=>item>24)
document.write(newarr)


//every---->every() method return true if the function return true for all the element in the array otherwise false

newarr=myarr.every((item,index)=>item>24)
document.write(newarr)


//1---->Remove duplicate value from array without using built in function 
const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];


function removeDuplicate(arr) {
    let length = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            arr[length] = arr[i];
            length++;
        }
    }
    
    // the last element is not a duplicate
    if (!tmp[arr[arr.length-1]]) {
        length--;
    }
    arr.length = length;
    return arr;
}

document.write(removeDuplicate(input));


