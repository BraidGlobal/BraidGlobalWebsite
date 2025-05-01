document.addEventListener("DOMContentLoaded", () => {
const faders = document.querySelectorAll('.stat-1');

const appearOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});

document.addEventListener("DOMContentLoaded", () => {
    const faders1 = document.querySelectorAll('.stat-2');
    
    const appearOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible1');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    
    faders1.forEach(fader1 => {
        appearOnScroll.observe(fader1);
      });
    
    });
    

    document.addEventListener("DOMContentLoaded", () => {
        const faders2 = document.querySelectorAll('.stat-2');
        
        const appearOptions = {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible2');
            observer.unobserve(entry.target);
          });
        }, appearOptions);
        
        faders2.forEach(fader2 => {
            appearOnScroll.observe(fader2);
          });
        
        });