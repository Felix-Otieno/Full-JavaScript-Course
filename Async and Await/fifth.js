function newYearsCountdown() {
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("2");
        setTimeout(() => {
          console.log("1");
          setTimeout(() => {
            console.log("Happy New Year! 🎉");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  newYearsCountdown();
  