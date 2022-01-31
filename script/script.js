function clockTimer() {
    let date = new Date()

    let time = [date.getHours(), date.getMinutes(), date.getSeconds()]

    if (time[0] < 10) {
        time[0] = "0" + time[0];
    };
    if (time[1] < 10) {
        time[1] = "0" + time[1];
    };
    if (time[2] < 10) {
        time[2] = "0" + time[2];
    };

    let current_time = time[0] + ":" + time[1] + ":" + time[2];


    let today = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

    if (today[0] < 10) {
        today[0] = "0" + today[0];
    };
    if (today[1] < 10) {
        today[1] = "0" + today[1];
    };
    if (today[2] < 10) {
        today[2] = "0" + today[2];
    };
    current_today = today[0] + "." + today[1] + "." + today[2];
    let todayNow = document.getElementById("clockAndToday");
    todayNow.innerHTML = current_today + " - " + current_time



    setTimeout("clockTimer()", 1000)
}
clockTimer();










class Timer {
    constructor() {
        this.date = new Date();
        this.date_text = {
            weekday: '',
            month: '',
            day: '',
        }
        this.setWeekday();
        this.setDay();
        this.setMonth();
        this.setYear();
        this.setHours();
        this.setMimutes();
        this.setSeconds();
    }

    setWeekday() {
        switch (this.date.getDay()) {
            case 0: this.date_text.weekday = 'Воскрксенье'; break;
            case 1: this.date_text.weekday = 'Понедельник'; break;
            case 2: this.date_text.weekday = 'Вторник'; break;
            case 3: this.date_text.weekday = 'Среда'; break;
            case 4: this.date_text.weekday = 'Четверг'; break;
            case 5: this.date_text.weekday = 'Пятница'; break;
            case 6: this.date_text.weekday = 'Суббота'; break;
        }
    }

    getWeekday() {
        return this.date_text.weekday
    }

    setMonth() {
        switch (this.date.getMonth()) {
            case 0: this.date_text.month = 'Января'; break;
            case 1: this.date_text.month = 'Февраля'; break;
            case 2: this.date_text.month = 'Марта'; break;
            case 3: this.date_text.month = 'Апреля'; break;
            case 4: this.date_text.month = 'Мая'; break;
            case 5: this.date_text.month = 'Июня'; break;
            case 6: this.date_text.month = 'Июля'; break;
            case 7: this.date_text.month = 'Августа'; break;
            case 8: this.date_text.month = 'Сентября'; break;
            case 9: this.date_text.month = 'Октября'; break;
            case 10: this.date_text.month = 'Ноября'; break;
            case 11: this.date_text.month = 'Декобря'; break;
        }
    }

    getMonth() {
        return this.date_text.month;
    }

    setDay() {
        this.date_text.day = this.date.getDate();
    }

    getDay() {
        return this.date_text.day;
    }

    setYear() {
        this.date_text.year = this.date.getFullYear();
    }

    getYear() {
        return this.date_text.year;
    }

    setHours() {
        let date_hours = this.date.getHours();
        switch (date_hours) {
            case 0: this.date_text.hours = `${date_hours} Часов`; break
            case 1: this.date_text.hours = `${date_hours} Час`; break
            case 2:
            case 3:
            case 4:
                this.date_text.hours = `${date_hours} Часа`; break

            case 21: this.date_text.hours = `${date_hours} Час`; break
            case 22:
            case 23:
                this.date_text.hours = `${date_hours} Часа`; break
            default:
                this.date_text.hours = `${date_hours} Часов`; break
        }
    }

    getHours() {
        return this.date_text.hours;
    }

    setMimutes() {
        let date_minutes = this.date.getMinutes();
        switch (date_minutes) {
            case 1: this.date_text.minutes = `${date_minutes} Минута`; break
            case 2:
            case 3:
            case 4: this.date_text.minutes = `${date_minutes} Минуты`; break
            case 21: this.date_text.minutes = `${date_minutes} Минута`; break
            case 22:
            case 23:
            case 24: this.date_text.minutes = `${date_minutes} Минуты`; break
            case 31: this.date_text.minutes = `${date_minutes} Минута`; break
            case 32:
            case 33:
            case 34: this.date_text.minutes = `${date_minutes} Минуты`; break
            case 41: this.date_text.minutes = `${date_minutes} Минута`; break
            case 42:
            case 43:
            case 44: this.date_text.minutes = `${date_minutes} Минуты`; break
            case 51: this.date_text.minutes = `${date_minutes} Минута`; break
            case 52:
            case 53:
            case 54: this.date_text.minutes = `${date_minutes} Минуты`; break
            default: this.date_text.minutes = `${date_minutes} Минут`; break
        }
    }

    getMinutes() {
        return this.date_text.minutes;
    }

    setSeconds() {
        let date_seconds = this.date.getSeconds();
        switch (date_seconds) {
            case 0: this.date_text.seconds = `${date_seconds} секунд`
            case 1: this.date_text.seconds = `${date_seconds} секунда`
            case 21: this.date_text.seconds = `${date_seconds} секунда`
            case 31: this.date_text.seconds = `${date_seconds} секунда`
            case 41: this.date_text.seconds = `${date_seconds} секунда`
            case 51: this.date_text.seconds = `${date_seconds} секунда`
            case 5: this.date_text.seconds = `${date_seconds} секунд`
            case 10:
            case 11: this.date_text.seconds = `${date_seconds} секунд`
            case 15: this.date_text.seconds = `${date_seconds} секунд`
            case 20: this.date_text.seconds = `${date_seconds} секунд`
            case 25: this.date_text.seconds = `${date_seconds} секунд`
            case 30: this.date_text.seconds = `${date_seconds} секунд`
            case 35: this.date_text.seconds = `${date_seconds} секунд`
            case 40: this.date_text.seconds = `${date_seconds} секунд`
            case 45: this.date_text.seconds = `${date_seconds} секунд`
            case 50: this.date_text.seconds = `${date_seconds} секунд`
            case 55: this.date_text.seconds = `${date_seconds} секунд`
            default: this.date_text.seconds = `${date_seconds} секунды`
        }
    }

    getSeconds() {
        return this.date_text.seconds
    }
    main() {
        return `Сегодня ${this.getWeekday()}, ${this.getDay()} ${this.getMonth()} ${this.getYear()} года, ${this.getHours()}, ${this.getMinutes()}, ${this.getSeconds()}`
    }

}

setInterval(() => {
    document.querySelector('#fullTimer').textContent = new Timer().main();
}, 1)