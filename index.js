

class WageCalculator {
    static wageForMonth = 0
    static daysWorked = 0
    static hoursWorked = 0
    static partTimeStatus = Math.floor(Math.random() * 2)
    static WageForMonth(){
        for(let i = 0; i<20; i++) {
            const attendance = Math.floor(Math.random() * 2)
            let working_hour
            if (this.partTimeStatus == 1) {
                working_hour = Math.floor(Math.random() * 5)
            }
            else {
                working_hour = Math.floor(Math.random() * 9)
            }
        
            if (attendance == 1) {
                this.daysWorked += 1
                this.hoursWorked += working_hour
                this.wageForMonth += (attendance * working_hour * 20)
            }
        }
        console.log(this.hoursWorked)
            console.log(this.wageForMonth)
            console.log(this.daysWorked)
        

    }
}
WageCalculator.WageForMonth()
    





