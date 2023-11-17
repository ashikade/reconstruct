let maxSmileyChanges = 12;
let currentSmiley = 2;

function changeSmiley(audioFile) {
    if (currentSmiley <= maxSmileyChanges) {
        document.getElementById('smiley').src = `images/smiley${currentSmiley}.png`;

        // Play the audio file
        let audio = new Audio(audioFile);
        audio.play();

        currentSmiley++;
    }
}
