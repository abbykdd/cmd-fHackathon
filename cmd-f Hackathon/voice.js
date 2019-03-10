if (!('webkitSpeechRecognition' in window)) {
    alert("your browser doesn't support this function");
} else {
    var key = ['start', 'end']; //keyword
    var grammar = '#JSGF V1.0; grammar key; public <key> = ' + key.join(' | ') +';';

    var recognition = new webkitSpeechRecognition();
    //var speechRecogniionList = new SpeechGrammarList();
    //speechRecogniionList.addFromString(grammar, 1);
    //recognition.grammars = speechRecogniionList;

    recognition.lang = 'en-US';

    //will continue to listen even after user stops talking
    recognition.continuous = true; 
    //no interim result
    recognition.interimResults = true; 
    recognition.maxAlternatives = 1;
/**   recognition.onstart = function() { 

    }*/
    recognition.onresult = function(event) { 
        var last = event.results.length - 1;
        var word = event.results[last][0].transcript;

        var array = word.split(" ", 1);
        console.log("I hear this" + word);
        /** switch(word) {
          case 'start' : startAnimation();
          break;
        } */
        for(var i = 0; i < array.length; i++) {
          console.log(array[i]);
          if(array[i] == "jump" ) {
            jump = true;
          break;
          }
        }
        

     }
    recognition.onerror = function(event) { 
        console.log("an error occurred");
        console.log(event);
     }
    recognition.onend = function() { 
        console.log("it's done");
     }
}

document.body.onclick = function() {
    recognition.start();
    console.log('waiting for command');
}