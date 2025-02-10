onload = () => {
  const revealButton = document.querySelector('.reveal-button');
  const cake = document.querySelector('.cake');
  const surpriseMessage = document.querySelector('.surprise-message');
  const newMessage = document.querySelector('.new-message');

  revealButton.addEventListener('click', () => {
    document.body.classList.remove('not-loaded');
    revealButton.classList.add('hidden');
    cake.classList.add('hidden');
    surpriseMessage.classList.add('fade-out');
    setTimeout(() => {
      surpriseMessage.classList.add('hidden');
      newMessage.classList.add('visible');
    }, 1000);
  });
};