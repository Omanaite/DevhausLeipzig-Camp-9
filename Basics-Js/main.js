
let attemps = 6;
let sentense = '';
let array = ['HTML','CSS','JAVASCRIPT'];
let wins = 0;
let loses = 0;

do {
    attemps = attemps - 1;
    let answer = window.prompt('Tell me what are the principal Front-End Languages - USE CAPITAL LETTERS TO ANSWER');
    if(array.includes(answer)){
        window.alert('Correct answer, you are left with: '+ attemps + ' attemps');
        wins++;
    }
    else{
        window.alert('Wrong answer, you are left with: '+ attemps + ' attemps');
        loses++;
    }
    sentense = sentense + answer;
  } while (attemps > 0);

let result = wins > loses ? 'You are WINNER!!': 'You are LOOOOSEEERRR!!!';
  
windows.alert(result);console.log();