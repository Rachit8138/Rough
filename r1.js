// const cube=(n)=>{return(n*n)};

// console.log(cube(8));

// console.log('hello world');

// setTimeout(()=>{
//     console.log('rachit');
// },4000);


// console.log('finished');
/* this with arrow function */
const student={
    name: "aman",
    marks:95,
    prop:this,  // global scope
    getName: function() {   // normal function is used here
        console.log(this);  /// will give you window
        return this.name;
    }, 

/* new one */
getInfo1: function(){
    setTimeout(() =>{
        console.log(this);  // student 
    }, 2000);
}, 
getInfo2: function(){
    setTimeout(() =>{
        console.log(this);  // windown
    }, 2000);
}, 
};

const arrayAverage=(n)=>{
    let total =0;
    for (each of n){
        total +=each;
    }
    return total/n.length;
}

console.log( arrayAverage([2,3,4,5,6,7]));

