function sayhello(){
    console.log("sayHellow")
}
setTimeout(sayhello,3000) // it will print after 3 seconds


/// set time interval
function printnumbers(){
    for( i=0;i<5 ;i++){
        console.log(i);
    }
    if(i===5){
        clearInterval(id);
    }
}
 var id=setInterval(printnumbers,2000)