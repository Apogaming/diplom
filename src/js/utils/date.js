export {
    fromDate,
    times,
    DaysWeek,
    getMonth
}
const date = new Date();
const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'];
function fromDate() {
    const todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const sevenDay = new Date(date.setDate(date.getDate() - 7));
    const from = `${sevenDay.getFullYear()}-${sevenDay.getMonth() + 1}-${sevenDay.getDate()}`;
    return from;
}
function times(str) {
    const date = new Date(str);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}г.`
}
function DaysWeek() {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[this.date.getDay()];
}

function getMonth() {
    return months[date.getMonth()].toUpperCase();
}
