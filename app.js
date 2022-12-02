setInterval(()=>{
    let date=new Date()
let hours=date.getHours()<10? "0"+date.getHours():date.getHours();
let minutes=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
let seconds=date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
   console.log(hours,minutes,seconds);

   document.getElementById("result").innerText=`${hours}:${minutes}:${seconds}`
   document.body.style.background=`#${hours}${minutes}${seconds}`
    
},1000);