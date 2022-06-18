/////////////////////////////////////////////////////////////////////////////////
//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?
//Answer
// var x = Number(prompt('Lütfen bir x değeri giriniz: '));
// var k = Number(prompt('Lütfen bir k değeri giriniz: '));

// var result = 3*x+4*k;
// document.writeln("Cevap: "+result);
/////////////////////////////////////////////////////////////////////////////////
//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32
//Answer
// var x = Number(prompt('Lütfen bir derece değeri giriniz: '));
// x = (x*9/5)+32;
// document.writeln("Cevap: "+x);
/////////////////////////////////////////////////////////////////////////////////
//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?
//Answer
// var x = Number(prompt('Lütfen bir sayı giriniz: '));
// if (x<0){
//     document.writeln("Sayınız negatif");
// }
// if (x>0){
//     document.writeln("Sayınız pozitif");
// }
// if(x==0){
//     document.writeln("Sayınız nötr");
// }
/////////////////////////////////////////////////////////////////////////////////
//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?
//Answer
// var password = prompt('Lütfen bir şifre giriniz: ');
// var repassword = prompt('Lütfen şifrenizi tekrar giriniz: ');
// if(password == repassword){
//     document.writeln("Doğru giriş yaptınız");
// }
// else{
//     document.writeln("Yanlış giriş yaptınız");
// }
/////////////////////////////////////////////////////////////////////////////////
//ÖDEV-5 (if-else for break continue)
//Fonksiyonlarla yapılsın
//Örnek-1)  kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun
//Answer
// function numberSize(number){
//     return document.writeln("Number of numbers: "+number);
// }

// function sumNumber(number){
//     var counter=0;
//     for(let i=0;i<=number;i++){
//         if(i == 7){
//             continue;
//         }
//         counter += i;
//     }
//     return document.writeln("<br>"+"Sum of numbers: "+counter);
// }

// function oddNumber(number){
//     var counter=0;
//     for(let i=0;i<=number;i++){
//         if(i%2 == 1){
//             counter ++;
//         }
//     }
//     return document.writeln("<br>"+"Number of odd numbers: "+counter);
// }

// function sumOddNumber(number){
//     var counter=0;
//     for(let i=0;i<=number;i++){
//         if(i%2 == 1 && i!=7){
//             counter +=i;
//         }
//     }
//     return document.writeln("<br>"+"Sum of odd numbers: "+counter);
// }

// function showOddNumber(number){
//     document.writeln("<br>"+"Odd numbers: ");
//     for(let i=0;i<=number;i++){
//         if(i%2 == 1){
//             document.writeln(" "+ i);
//         }
//     }
// }

// function evenNumber(number){
//     var counter=0;
//     for(let i=0;i<=number;i++){
//         if(i%2 == 0){
//             counter ++;
//         }
//     }
//     return document.writeln("<br>"+"Number of even numbers: "+counter);
// }

// function sumEvenNumber(number){
//     var counter=0;
//     for(let i=0;i<=number;i++){
//         if(i%2 == 0){
//             counter +=i;
//         }
//     }
//     return document.writeln("<br>"+"Sum of even numbers: "+counter);
// }

// function showEvenNumber(number){
//     document.writeln("<br>"+"Even numbers: ");
//     for(let i=0;i<=number;i++){
//         if(i%2 == 0){
//             document.writeln(" "+ i);
//         }
//     }
// }

// var x = Number(prompt('Lütfen bir sayı giriniz: '));
// if(x==44){
//     document.writeln("<br>"+"Secretkey!");
// }
// else{
//     numberSize(x);
//     sumNumber(x);
//     oddNumber(x);
//     sumOddNumber(x);
//     showOddNumber(x);
//     evenNumber(x);
//     sumEvenNumber(x);
//     showEvenNumber(x);
// }
/////////////////////////////////////////////////////////////////////////////////
//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"
//Answer
// function adminFunction(){
//     document.writeln("<br>"+'Admin sayfası')
//   }
  
//   function mailCheck(){
//     var number = 4;
//     let dbUserEmail ="deneme@gmail.com";
//     let dbUserPassword = "root";
  
//     for(let i=number;i>=0;i--){
//       let mail = prompt("Mailinizi giriniz: ");
//       let password = prompt("Şifrenizi giriniz: ");
  
//       if(dbUserEmail == mail && dbUserPassword == password){
//         document.writeln("<br>"+"Giriş başarılı");
//         adminFunction();
//         break;
//       }
//       else{
//         window.alert("Giriş başarısız.\nKalan deneme hakkı:"+i);
//         if(i==0){
//           document.writeln("<br>"+"Sistem bloke edildi.");
//         }
//       }
//     }
//   }
//   mailCheck();