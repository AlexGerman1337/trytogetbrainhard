let lang = confirm("Ваш язык русский?");
let ruDays = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let enDays = 'Monday, tuesday, wednesday, thursday, friday, saturday, sunday';


if(lang === true)(console.log(ruDays));
else if(lang === false)(console.log(enDays));


 switch(lang){
    case true:
        console.log(ruDays);
        break;
    case false:
        console.log(enDays);
        break;
}



while(lang = true){
    console.log(ruDays);
    break;

}

while(lang = false){
    console.log(enDays);
    break;
}



let namePerson = prompt("Введите ваше имя");
namePerson === "Артем" ? 
console.log("директор"):
namePerson === "Максим" ? 
console.log("преподаватель") : 
console.log("cтудент");

          // (namePerson === undefined) : (
            //    console.log("cтудент"))
   