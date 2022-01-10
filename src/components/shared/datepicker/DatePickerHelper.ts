export class DatePickerHelper {

    static daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    static daysAbbreviation = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    static monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    static oneDay = 60 * 60 * 24 * 1000;
    static todayTimestamp = Date.now() - (Date.now() % this.oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

    static getTodayTimestamp = () => {
        return Date.now() - (Date.now() % this.oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
    }

    static getNumberOfDays = (year: number, month: number) => {
        return 40 - new Date(year, month, 40).getDate();
    }

    static getDayDetails = (args: any) => {
        let date = args.index - args.firstDay;
        let day = args.index % 7;
        let prevMonth = args.month - 1;
        let prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = this.getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month,
            timestamp,
            dayString: this.daysMap[day]
        }
    }

    static getMonthDetails = (year: number, month: number) => {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = this.getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0;
        let cols = 7;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                currentDay = this.getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    static isCurrentDay = (day: any) => {
        return day.timestamp === this.todayTimestamp;
    }

    static isSelectedDay = (day: any, selectedDay: any) => {
        return day.timestamp === selectedDay;
    }

    static getDateStringFromTimestamp = (timestamp: number) => {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth() + 1;
        let date = dateObject.getDate();
        return dateObject.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date);
    }

    static getDateFromDateString = (dateValue: any) => {
        let dateData = dateValue.split('-').map((d: string) => parseInt(d, 10));

        if (dateData.length < 3) {
            return null;
        }

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }

    static getMonthStr =(month: number)=> this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
}