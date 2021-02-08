function showTime() {
   let date = new Date()
   let h = date.getHours()<10? `0${date.getHours()}`: date.getHours()
   let m = date.getMinutes()<10? `0${date.getMinutes()}`: date.getMinutes()
   let s = date.getSeconds()<10? `0${date.getSeconds()}`: date.getSeconds()

   const time = h +":"+m+":"+s;
   document.getElementById("time").innerText= time
   setTimeout(showTime,1000)
}
showTime()
