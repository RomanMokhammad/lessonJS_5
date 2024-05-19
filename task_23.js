
function time (number1){
 
  if (!number1 || number1>6000){
      alert("please write a number")
      console.log("an error occurred") 
  return 0}

  
let cal1= Math.trunc(number1/60 )
let cal2 =  number1 - (60*cal1)
  console.log(cal1)
  console.log(cal2)
  console.log(`Години ${cal1} хвилини ${cal2}`)

  return 0
}


console.log(time (100))
