// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1 - 6 гэсэн утгаын энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Программ эхлэхэд бэлтгэе.
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';

})