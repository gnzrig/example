var isNewGame;

var activePlayer, scores, roundScore;

var diceDom = document.querySelector(".dice");

initGame();

function initGame(){

        isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
        activePlayer = 0;

        // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
        scores = [0, 0];

        // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
        roundScore = 0;

        // Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1 - 6 гэсэн утгаын энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

        // Программ эхлэхэд бэлтгэе.
        document.getElementById("score-0").textContent = 0;
        document.getElementById("score-1").textContent = 0;

        document.getElementById("current-0").textContent = 0;
        document.getElementById("current-1").textContent = 0;

        document.getElementById("name-0").textContent = "PLAYER 1";
        document.getElementById("name-1").textContent = "PLAYER 2";

        document.querySelector(".player-0-panel").classList.remove("winner");
        document.querySelector(".player-1-panel").classList.remove("winner");

        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.remove("active");

        document.querySelector(".player-0-panel").classList.add("active");

        diceDom.style.display = "none";
        }

// Шоог шидэх эвент листенэр 
document.querySelector(".btn-roll").addEventListener('click', function(){

    if(isNewGame){
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        diceDom.style.display = "block";

        diceDom.src = 'dice-' + diceNumber + '.png';

        // Буусан тоо нь 1 ээс ялгаатай бол идэвхитэй Тоглогчийн ээлжийн оноог нэмэгдүүлнэ.

        if(diceNumber !== 1){
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            switchToNextPlayer();
        }
    } else {
        alert("Game is over. Click new game!!")
    }

})

// HOLD эвент листенэр
document.querySelector('.btn-hold').addEventListener("click" , function(){
    if(isNewGame){
        scores[activePlayer] = scores[activePlayer] + roundScore;

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100){
            isNewGame = false;

            document.getElementById("name-" + activePlayer).textContent = "Winner !!!"

            document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');

            document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
        } else {
            switchToNextPlayer();
        }

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    } else {
        alert("Game is over. Click Start New Game...")
    }

})


function switchToNextPlayer(){
    roundScore = 0;

    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDom.style.display = "none";
}

// New-game

document.querySelector('.btn-new').addEventListener('click', initGame());

