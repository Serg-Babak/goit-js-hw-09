    const body = document.querySelector('body');
    const start= document.querySelector('button[data-start]');
    const stop= document.querySelector('button[data-stop]');
  let TimerId = null;
  
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  
  start.addEventListener('click', () => {
    stop.removeAttribute('disabled');
    start.setAttribute('disabled', 'disabled');
    TimerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  stop.addEventListener('click', () => {
    stop.setAttribute('disabled', 'disabled');
    start.removeAttribute('disabled');
    clearInterval(TimerId);
  });
