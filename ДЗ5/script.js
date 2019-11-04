var time = {
  seconds: "3662",
}

Object.defineProperty(time, "secondsString", { 
  // переводим полученное количество секунд в строку типа * лет * дней * часов * минут * секунд
  get: function() {    
  years = Math.floor(this.seconds / (60 * 60 * 24 * 365));
  days = Math.floor(this.seconds / (60 * 60 * 24)) % 365;
  hours = Math.floor(this.seconds / (60 * 60)) % 24;
  minutes = Math.floor(this.seconds /  60) % 60;
  seconds = this.seconds %  60;
  return years + " лет " + days + " дней " + hours + " часов "+ minutes + " минут " + seconds + " секунд "  ;
  },

  set: function(value) {
     // переводим из строки типа * лет * дней * часов * минут * секунд в секунды
    var replaced = value.replace(/[^+\d]/g, ' '); // заменяем всё кроме чисел на пробелы
    replaced = replaced.replace(/\s+/g, ' ').trim(); // убираем лишние пробелы
    splited = replaced.split(" "); 
    years = +splited[0] * (60 * 60 * 24 * 365);
    days = +splited[1] * (60 * 60 * 24);
    hours = +splited[2] * (60 * 60);
    minutes = +splited[3] * 60;
    seconds = +splited[4];
    this.seconds = years + days + hours + minutes + seconds;
    }
});

console.log(time.secondsString);
time.secondsString = "5 лет 6 дней 1 часов 2 минут 3 секунд";
console.log(time.seconds);
