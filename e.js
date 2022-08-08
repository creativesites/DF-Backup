var firstArray = ['John', 'David', 'Bob'];
var secondArray = ['Mike','Sam','Carol'];
var thirdarr = ['one', 'two', 'three']
var arrayOfObject = firstArray.map(function (value, index){
    let ob = {}
    ob.USER = value;
    ob.AGENT = secondArray[index];
    ob.TIME = thirdarr[index]
   return ob
});

console.log("The mix Of array object=");
console.log(arrayOfObject);