
function time(){
let sesion = "AM"
let currenttime = new Date()
hrs = currenttime.getHours()
mins = currenttime.getMinutes()
second = currenttime.getSeconds()
   
if(hrs == 0)
{
    hrs = 12
}
else if (hrs > 12)
{
    hrs = hrs - 12
    sesion = "PM"
}
   
   hrs = (hrs < 10 ? "0" : "") + hrs
   mins = (mins < 10 ? "0" : "") + mins
   second = (second < 10 ? "0": "" ) + second

    
   document.getElementById("hrs").innerHTML = hrs
   document.getElementById("min").innerHTML = mins
   document.getElementById("sec").innerHTML = second
   document.getElementById("session").innerHTML = sesion
}

setInterval(() => {
    time()
},1000)


  





























// setInterval(() => {digitalclock()},1000)
// function digitalclock(){

// let currenttime = new Date()
// hrs.innerHTML   = (currenttime.getHours() < 10 ? "0" : "" ) + currenttime.getHours()
// mins.innerHTML  = (currenttime.getMinutes() <10 ? "0" : "" ) + currenttime.getMinutes()
// second.innerHTML = (currenttime.getSeconds() < 10 ? "0" : "") + currenttime.getSeconds()

// if(hrs == 0 ){
//     hrs = 12
// }else if(hrs > 12)
// {
//     hrs = hrs - 12
//     sesion = "PM"
// }else{
// }

// }
