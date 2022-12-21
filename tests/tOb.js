let user = {
    name: "John Doe",
    age: 40,
    salary: {
        value: '500',
        test: 'ft'
    }
};
let a = 'name' in user; // Returns true
let b = 'hobby' in user; // Returns false
let c = 'age' in user;
let d = 'salary.value' in user
console.log(a)
console.log(b)
console.log(c)
console.log(d)
if(user?.salary.balue !== undefined){
    console.log('there')
}else{
    console.log('not there')
}