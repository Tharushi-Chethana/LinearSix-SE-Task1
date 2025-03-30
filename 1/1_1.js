Date.prototype.daysTo = function (d2){

    //in milliseconds
    date_differennce = new Date(d2).getTime() - this.getTime();

    //in days:
    quality_of_completeDays = Math.floor(date_differennce / (1000 * 60 * 60 * 24));

    return quality_of_completeDays
}

//Date1
const d1 = new Date("1999-06-11");
//Date2
const d2 = new Date("2025-03-31")

//Quantity of complete days from d1 to d2
const date_diff = d1.daysTo(d2);

console.log(`Quantity of complete days from d1 to d2: ${date_diff}`)