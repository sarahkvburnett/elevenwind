function getYear(date){
    return date.getFullYear();
}

const toDateString = (date = null) => {
    if (!date) date = new Date(Date.now());
    return date.toDateString();
}

module.exports = {
    dateToYear: getYear,
    dateToString: toDateString
}
