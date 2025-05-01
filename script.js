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
        const faders2 = document.querySelectorAll('.quotes-1');
        
        const appearOptions = {
          threshold: 0.3,
          rootMargin: '0px 0px -150px 0px'
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


        document.addEventListener("DOMContentLoaded", () => {
            const faders3 = document.querySelectorAll('.quotes-2');
            
            const appearOptions = {
              threshold: 0.3,
              rootMargin: '0px 0px -200px 0px'
            };
            
            const appearOnScroll = new IntersectionObserver(function(entries, observer) {
              entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible3');
                observer.unobserve(entry.target);
              });
            }, appearOptions);
            
            faders3.forEach(fader3 => {
                appearOnScroll.observe(fader3);
              });
            
            });


            document.addEventListener("DOMContentLoaded", () => {
                const faders4 = document.querySelectorAll('.quotes-3');
                
                const appearOptions = {
                  threshold: 0.3,
                  rootMargin: '0px 0px -250px 0px'
                };
                
                const appearOnScroll = new IntersectionObserver(function(entries, observer) {
                  entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('visible4');
                    observer.unobserve(entry.target);
                  });
                }, appearOptions);
                
                faders4.forEach(fader4 => {
                    appearOnScroll.observe(fader4);
                  });
                
                });


                document.addEventListener("DOMContentLoaded", () => {
                    const faders5 = document.querySelectorAll('.quotes-4');
                    
                    const appearOptions = {
                      threshold: 0.3,
                      rootMargin: '0px 0px -300px 0px'
                    };
                    
                    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
                      entries.forEach(entry => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add('visible5');
                        observer.unobserve(entry.target);
                      });
                    }, appearOptions);
                    
                    faders5.forEach(fader5 => {
                        appearOnScroll.observe(fader5);
                      });
                    
                    });