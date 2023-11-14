document.addEventListener('DOMContentLoaded', function () {
  const ringtoneImg = document.getElementById('ringtone-img');
  const declineBtn = document.getElementById('decline-btn');
  const ringtone = document.getElementById('ringtone');

  let ringtoneInterval;

  ringtoneImg.addEventListener('click', function () {
    // Play the ringtone continuously on loop
    ringtone.play();
    ringtone.loop = true;
  });

  declineBtn.addEventListener('click', function () {
    // Stop the ringtone
    ringtone.pause();
    ringtone.currentTime = 0;
    console.log('Call declined');
  });
});





