const marqueeText = () => {
  (() => {
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  
  let count = 0;
  let element = document.querySelector('#marquee');
  
  function step(timestamp) {
    count++;
    element.style.transform = `translate3d(-${count}px, 0, 0)`;
    window.requestAnimationFrame(step);
  }
  
  window.requestAnimationFrame(step);
}

export default marqueeText;