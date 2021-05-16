$(document).ready(function () {
    let $man = $('.persona1');
    let $woman = $('.persona2');
    let $nxtBtn = $('#nextBtn');
    let $dialogue = $('.dialogue');

    // dialogues 
    let dialogues = ['hello', 'how are you', 'good', 'k bye', 'bye'], 
    counter = 0
    
    $nxtBtn.on('click', () => {
        counter = (counter + 1) % dialogues.length;
                // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array
        $dialogue.html(dialogues[counter]);
    })
 



});