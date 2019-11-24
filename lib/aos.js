import AOS from 'aos';
const initAOS = () => {
  if(!AOS.refresh()){
    AOS.init({
      disable: false, 
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false, 
      debounceDelay: 50, 
      throttleDelay: 99, 
      offset: 120,
      delay: 0, 
      duration: 1000, 
      easing: 'ease', 
      once: false, 
      mirror: false, 
      anchorPlacement: 'top-bottom', 
      ssr: true
    });
  }
}

export default initAOS;