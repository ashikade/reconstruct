document.addEventListener("DOMContentLoaded", function() {
  const breakableItems = document.querySelectorAll('.breakable');
  const breakSounds = document.querySelectorAll('.breakSound');
  let itemsBroken = 0;

  breakableItems.forEach((item, index) => {
      item.addEventListener('click', function() {
          if (!item.classList.contains('broken')) {
              itemsBroken++;
              item.classList.add('broken');
              const breakSound = breakSounds[index];
              breakSound.currentTime = 0; // Reset sound to start
              breakSound.play();

              if (itemsBroken === breakableItems.length) {
                  setTimeout(resetItems, 3000); // Adjust timing as needed for your audio duration
              }
          }
      });
  });

  function resetItems() {
      breakableItems.forEach(item => {
          item.classList.remove('broken');
      });
      itemsBroken = 0;
  }
});