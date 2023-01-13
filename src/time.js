/*
 * 
 * 
 */


function getHours() {
    var hours = date.getHours();

    if (hours < 10)
        return "0" + hours;

    return hours;
}


function getMinutes() {
    var minutes = date.getMinutes();

    if (minutes < 10)
        return "0" + minutes;

    return minutes;
}


function getSeconds() {
    var seconds = date.getSeconds();

    if (seconds < 10)
        return "0" + seconds;

    return seconds;
}

// returns the correct meridian for the current time
function getMeridiem() {
    var period = date.getHours();

    if (period >= 12) {
        return "pm";
    }

    return "am";
}

export default
    {
        getHours,
        getMinutes,
        getSeconds,
        getMeridiem
    }