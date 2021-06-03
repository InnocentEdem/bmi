let lifeInWeeks = (age) =>{
    var ageLeft = 90-age;
    var weeksLeft = ageLeft * 52;
    var daysLeft = ageLeft * 365;
    var monthsLeft = ageLeft * 12;
    return `You have ${daysLeft} days, ${weeksLeft} weeks,
    and ${monthsLeft} months left.`
}
