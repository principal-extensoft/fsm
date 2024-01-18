const Dates = (function () {

    const months = [
        {
            'name': '',
            'abbr': '',
        },
        {
            'name': 'January',
            'abbr': 'Jan',
        },
        {
            'name': 'February',
            'abbr': 'Feb',
        },
        {
            'name': 'March',
            'abbr': 'Mar',
        },
        {
            'name': 'April',
            'abbr': 'Apr',
        },
        {
            'name': 'May',
            'abbr': 'may',
        },
        {
            'name': 'June',
            'abbr': 'Jun',
        },
        {
            'name': 'July',
            'abbr': 'Jul',
        },
        {
            'name': 'August',
            'abbr': 'Aug',
        },
        {
            'name': 'September',
            'abbr': 'Sep',
        },
        {
            'name': 'October',
            'abbr': 'Oct',
        },
        {
            'name': 'November',
            'abbr': 'Nov',
        },
        {
            'name': 'December',
            'abbr': 'Dec',
        },
    ];

    const days = [
        {
            'name': 'Sunday',
            'abbr': 'Sun',
        },
        {
            'name': 'Monday',
            'abbr': 'Mon',
        },
        {
            'name': 'Tuesday',
            'abbr': 'Tue',
        },
        {
            'name': 'Wednesday',
            'abbr': 'wed',
        },
        {
            'name': 'Thursday',
            'abbr': 'Thu',
        },
        {
            'name': 'Friday',
            'abbr': 'Fri',
        },
        {
            'name': 'Saturday',
            'abbr': 'Sat',
        },
    ];

    function deconstruct(date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
        }
    };

    function monthLater(beginDate, numberOfMonths = 1) {
        const date = deconstruct(beginDate);
        var firstOfMonth = new Date(data.year, date.month + numberOfMonths, 1);
        daysInMonth = new Date(date.year, date.month + numberOfMonths + 1, 0).getDate();
        if (newDate(date.year, date.month + 1, 0).getDate() === day || day > daysInMonth) {
            return new Date(date.year, date.month + numberOfMonths, date.day);
        } else {
            return new Date(date.year, month + numberOfMonths, date.day);
        }
    };

    function firstDayOfMonth(inputDate) {
        const date = deconstruct(inputDate);
        return new Date(date.year, date.month, 1);
    };

    function lastDayOfMonth(inputDate) {
        const date = deconstruct(inputDate);
        return new Date(date.year, date.month, 0);
    };

    function formatDate(inputDate, formatPattern) {
        const date = deconstruct(inputDate);
        const month = String(date.month + 1).padStart(2, '0');
        const day = String(date.day).padStart(2, '0');
        return `${date.year}-${month}-${day}`;
    };

    function monthDisplay(month) {
        return months[month].name;
    };


    function dayOfWeek(date) {
        const dayOfWeek = date.getDay();
        return days[dayOfWeek].abbr;
    };

    function weekOfYear(date) {
        const firstOfYear = new Date(date.getFullYear(), 0, 1);
        const week = Math.ceil((((date.getTime() - firstOfYear.getTime()) / 86400000) + firstOfYear.getDay() + 1) / 7);
    }




    return {
        monthLater
    }
})();