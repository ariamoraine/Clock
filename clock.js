var clock = {
  totalSeconds: 0, // default clock starts at 0

  getSeconds: function() { //returns the current second
    var thisSecond = this.totalSeconds % 60;

    if (thisSecond < 10) { //checks if the sec is a two digit number.
      return "0" + thisSecond;
    }

    return thisSecond;
  },

  getMinute: function() { //returns the current hour count
    var minutes = Math.floor(this.totalSeconds / 60);
    var thisMinute = minutes % 60;

    if (thisMinute < 10) {
      return "0" + thisMinute;
    }

    return thisMinute;
  },

  getHour: function() { // returns the current hour count
    var hourCount = Math.floor(this.totalSeconds / 3600);

    if (hourCount < 10) { //checks if the total hours is less than a two digit number
      return "0" + hourCount;
    }

    return hourCount;
  },

  printTime: function() { //calls all three time functions and returns a formatted string
    return this.getHour() + ":" + this.getMinute() + ":" + this.getSeconds()
  },

  tick: function(startSecond) {

    if (startSecond > 0) { // checking if a start time was passed in when called
      this.totalSeconds = startSecond;
    };

    setInterval(function() {
      console.log(this.printTime()); //printing out the clock to the console
      this.totalSeconds += 1; // adding one second to totalSeconds each time
    }.bind(this), 1000); //printing calling setInterval every 1 second
  }
};

clock.tick(8900); //calling clock.tick(number) sets the start of the clock to a set time
