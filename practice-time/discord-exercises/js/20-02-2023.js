// Write a function that takes an integer 'n' and prints numbers from 1 to 'n'.<br>
// However, any multiple of 3 should instead of the number print 'Fizz'.<br>
// Any multiple of 5 should instead of the number print "Buzz".<br>
// Any multiple of both 3 and 5 should print 'FizzBuzz'



function printChainNummer (){
    let nummer = document.getElementById('inputNummer').value;
    const node = document.createElement("li");
    for (i = 1; i <= nummer; i++){
        let 
        if (i % 3 === 0 && i % 5 === 0){
            let nodeText = document.createTextNode('FizzBuzz, ');
            node.appendChild(nodeText);
            document.getElementById('ul-1').appendChild(node);
        }else if (i % 5 === 0){
            let nodeText = document.createTextNode('Buzz, ');
            node.appendChild(nodeText);
            document.getElementById('ul-1').appendChild(node);
        } else if (i % 3 === 0){
            let nodeText = document.createTextNode('Fizz, ');
            node.appendChild(nodeText);
            document.getElementById('ul-1').appendChild(node);
        }else{
            let nodeText = document.createTextNode(i + ', ');
            node.appendChild(nodeText);
            document.getElementById('ul-1').appendChild(node);
        }

    };
};

function fizzBuzz(startingNum, endNum, phraseA, pharaseB, numberA, numberB){
    let result = [];
    for (let i = startingNum; i <= endNum; i++){
        if (i % (numberA + numberB) === 0){
            console.log(phraseA + pharaseB);
        }else if (i %numberA ===0){
            console-log(phraseA);
        }
    }
}

const result = fizzBuzz (1, 101, "Fizz", "Buzz", 3, 5);