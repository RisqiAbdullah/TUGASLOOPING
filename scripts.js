//Ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2 
//yaitu counted loop and uncounted loop
//perbedaan nya 
//1. counted loop merupakan perulanagan yang jelas dan sudah tentu banyak perulangannya
//2. uncounted kali harus mengulang/contyoh 
// function PushUp(){
//     //Code
// }
// for(i = 1; i<=10; i++){
//     PushUp();
// }

// let bosan;
// //contoh
// while(bosan == false){
//     PushUp(); 
// }

//macam perulangan counted loop
//1. perulangan for
//2 perulangan foreach
//3 perulangan repeat

//macam macam perulangan uncounted loop
//1. perulangan while
//2. perulangan Do/while

//perulangan for 
//perulangan for merupakan perulangan yang termasuk dlama countes loop, karena sudah jelas berapa kal akan mengulang sebuah perulangan
//contoh

// for (let i = 0; i < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i } kali</p>`)
// }

//perulagan while
//perulangan while merupakan perulangan yang termasuk kedalam perulangan uncounted loop namu n perulangan while juga dapat masuk atau menjadi perulanga yang counted
//loop dengan memberikan sebuah counter didalamnya

//contoh
// let ulang = confirm("Apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("Apakah anda mau mengulangan?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//    }
// }

// document.write("Perulangan sudah dilakukan sebanyak " + counter + "Kali");


//perulangan do/while
//perulagan do/while sama seperti perulangan whileakan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while

// do{
//     //code
// }while(kondisi);

// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);


// document.write("Pengulangan yang sudah dilakukan sebanyak " + counter +" kal");

let sum = "";
while(true){
    let value = prompt("Masukkan sebuah huruf", '');
    if(!value) break;

    sum+= value;
}

alert('sum : ' + sum );