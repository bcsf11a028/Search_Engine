$(document).ready(function () {

    var date = new Date();
    var tMonth = "January";

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    // Months
    if (month == 1) tMonth = "January";
    else if (month == 2) tMonth = "February";
    else if (month == 3) tMonth = "March";
    else if (month == 4) tMonth = "April";
    else if (month == 5) tMonth = "May";
    else if (month == 6) tMonth = "June";
    else if (month == 7) tMonth = "July";
    else if (month == 8) tMonth = "August";
    else if (month == 9) tMonth = "September";
    else if (month == 10) tMonth = "October";
    else if (month == 11) tMonth = "November";
    else tMonth = "December";

    //Weekdays
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekday = weekdays[date.getDay()];

    var today = weekday + ", " + day + " " + tMonth + " " + year;
    $("#date").text(today);

});
