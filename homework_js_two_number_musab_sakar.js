var number1 = Number(prompt("Lütfen birinci sayıyı giriniz"));
var number2 = Number(prompt("Lütfen ikinci sayıyı giriniz"));

document.write("Bu sayılardan en küçüğü: "+Math.min(number1,number2)+"<br>");
document.write("Bu sayılardan en büyüğü: "+Math.max(number1,number2)+"<br>");
document.write("Bu sayılardan en büyüğünün karekökü: "+Math.sqrt(Math.max(number1,number2))+"<br>");
document.write("Bu sayılardan en büyüğünün karekökünü yukarı yuvarla: "+Math.ceil(Math.sqrt(Math.max(number1,number2)))+"<br>");
document.write("Bu sayılardan en küçüğünün mutlak değeri: "+Math.abs(Math.min(number1,number2))+"<br>");
document.write("Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstü: "+Math.pow(Math.min(number1,number2),Math.max(number1,number2))+"<br>");


