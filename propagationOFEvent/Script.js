var innerdiv=document.getElementById('inner');
innerdiv.addEventListener('click',function(){
    console.log("clickinnerdiv");
    event.stopPropagation();
});
var outerdiv=document.getElementById('outer');
outerdiv.addEventListener('click',function(){
    console.log("clickouterdiv");
    event.stopPropagation();
});

document.addEventListener('click',function(){
    console.log("clickDocument")});