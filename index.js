attendance=Math.floor(Math.random()*2)

if(attendance==1){
    console.log("present")
}else{
    console.log("absent")
}

partOrFull=Math.floor(Math.random()*2)// for part is 0 and for full its 1
if(partOrFull==0){
    let noOfHour=4
    console.log("part time employee wage for today is ",attendance*noOfHour*20)
}else{

    let noOfHour=8
    console.log("full time employee wage for today is ",attendance*noOfHour*20)
}
