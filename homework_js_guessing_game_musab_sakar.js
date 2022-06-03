var guessNumber = 5;
var realNumber = Math.round((Math.random()*10+1));
for(var i=0; i<5; i++){

    var number = Number(prompt("Lütfen bir sayıyı giriniz"));
    if(i == 4){
        window.alert("Bilemediniz!");
        break;
    }
    if (number < realNumber){
        window.alert("Daha büyük bir sayı giriniz");
    }
    if (number > realNumber){
        window.alert("Daha küçük bir sayı giriniz");
    }

    if (number == realNumber){
        window.alert("Tahmininiz doğru\nDeneme numarası: "+(i+1));
        break;
    }
}