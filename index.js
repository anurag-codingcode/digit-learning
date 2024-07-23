attendance=Math.floor(Math.random()*2)

if(attendance==1){
    console.log("present")
}else{
    console.log("absent")
}
let noOfHourPerDay
let partOrFull=Math.floor(Math.random()*2)// for part is 0 and for full its 1
if(partOrFull==0){
    noOfHourPerDay=4
    console.log("part time employee wage for today is ",attendance*noOfHourPerDay*20)
}else{

    noOfHourPerDay=8
    console.log("full time employee wage for today is ",attendance*noOfHourPerDay*20)
}

switch(partOrFull){
    case 0:
        console.log("part time employee wage for today is ",attendance*4*20)
    case 1:
        console.log("full time employee wage for today is ",attendance*8*20,"using switch")

}