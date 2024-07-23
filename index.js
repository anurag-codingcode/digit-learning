
let wageForMonth=0
let daysWorked=0
let hoursWorked=0
let partTimeStatus=Math.floor(Math.random()*2)
for(let i=0;i<20;i++){
    const attendance=Math.floor(Math.random()*2)
    let working_hour
    if (partTimeStatus==1){
        working_hour=Math.floor(Math.random()*5)
    }
    else{
        working_hour=Math.floor(Math.random()*9)
    }
    
    if (attendance==1){
        daysWorked+=1
        hoursWorked+=working_hour
        wageForMonth+=(attendance*working_hour*20)
    }
}
console.log("days worked",daysWorked)
console.log("wage for month",wageForMonth)
console.log("hours worked ",hoursWorked)




