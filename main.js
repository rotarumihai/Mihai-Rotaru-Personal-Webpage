


/*window.onbeforeunload = function() {
    return true;
}; */

/* SCROLL BAR FUNCTIONS */

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);


/* OPEN NEW TAB AND STAY ON CURRENT */
/*
document.getElementById('webpage1').onclick = function() {
  window.open('https://rotarumihai.github.io/Number_Guesser_Project_JS/');   
}; */

/* SKILL BAR FUNCTIONS */

(function() {
  
  var SkillsBar = function( bars ) {
    this.bars = document.querySelectorAll( bars );
    if( this.bars.length > 0 ) {
      this.init();
    } 
  };
  
  SkillsBar.prototype = {
    init: function() {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function() {
        self.action();
      }, 500);
      
      
    },
    select: function( n ) {
      var self = this,
        bar = self.bars[n];
        
        if( bar ) {
          var width = bar.parentNode.dataset.percent;
        
          bar.style.width = width;
          bar.parentNode.classList.add( "complete" ); 
        }
    }, 
    action: function() {
      var self = this;
      self.index++;
      if( self.index == self.bars.length ) {
        clearTimeout( self.timer );
      } else {
        self.select( self.index );  
      }
      
      setTimeout(function() {
        self.action();
      },500);
    }
  };
  
  window.SkillsBar = SkillsBar;
  
})();

(function() {
  document.addEventListener( "DOMContentLoaded", function() {
    var skills = new SkillsBar( ".skillbar-bar" );
  });
})();



/* HOBBIES IMG EFFECT */

const options = {
  rootMargin: "0px",
  threshold: 0.1
};

const inViewPortObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let target = entry.target;
      let img = target.querySelector('img');
      let dataSrc = img.getAttribute('data-src');
      img.src = dataSrc;
      target.classList.add('inViewPort');
    }
  });
}, options);

const cards = document.querySelectorAll('.card');
cards.forEach(function(card, i) {
  inViewPortObserver.observe(card);
})

