let maxSmileyChanges = 12;
let currentSmiley = 2;

function changeSmiley() {
    if (currentSmiley <= maxSmileyChanges) {
        document.getElementById('smiley').src = `images/smiley${currentSmiley}.png`;
        currentSmiley++;
    }
}