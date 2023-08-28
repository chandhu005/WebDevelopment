function timer() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(
        function () {
            console.log(i);
            if(i===5){
                clearInterval(id);
            }
           
          //Write your code here...
        },i*1000 //write your code here...);
      );
    
    }
  }
  console.log("Hello ninjas!");
  
  var id=setInterval(timer,1000);
  // Do not edit the rest of the code
  
  let obj1 = { firstName: 'James' };
let obj2 = {...obj1};
obj2.firstName = 'John';
console.log(obj1);

var arr = []

arr.push("hello")
arr.hello = 0
var value = 0
for(var i = 0;i < 5; i++) {
    value = arr[value]
}
console.log(value)
function change1(obj) {
    obj.name = "ninjas"
  }
  function change2(obj) {
    obj = {name: "changed"}
  }
  
  var obj = {name:"coding"}
  
  change1(obj)
  change2(obj)
  console.log(obj.name)  
  var d = {h: 2, j: 3}

var e = d
var f = {...d}

console.log(e === d)
console.log(f === d)

var d = {h: 2, j: 3}

var e = d
var f = {...d, j: 4}

console.log(f.h)
console.log(f.j)