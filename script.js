var age = +prompt("введите свой возраст")
if (age > 0 && age <= 18) {
    alert("Вы еще молоды, Вам нужно учиться")
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать")
} else if (age > 50 && age <= 59) {
    alert("Вам скоро на пенсию")
} else if (age > 59 && age <= 100) {
    alert("Вы пенсионер")
} else {
    alert("Что-то пошло не так")
}


var time = +prompt("введите время")
if (time > 0 && time <= 6) {
    alert(time + " часа ночи")
} else if (time > 7 && time <= 10) {
    alert(time + " часов утра")
} else if (time > 11 && time <= 17) {
    alert(time + " часа дня")
} else if (time > 18 && time <= 23) {
    alert(time + "  часов вечера")
}

var a = +prompt("введите первое число")
var b = +prompt("введите второе число")
var c = +prompt("введите третье число")
    