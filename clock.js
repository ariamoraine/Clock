var clock = {
  totalSeconds: 0,

  getSeconds: function() {
    var thisSecond = this.totalSeconds % 60;

    if (thisSecond <= 9) {
      return "0" + thisSecond;
    }

    return thisSecond;
  },

  getMinute: function() {
    var minutes = Math.floor(this.totalSeconds / 60);
    var thisMinute = minutes % 60;

    if (thisMinute < 10) {
      return "0" + thisMinute;
    }

    return thisMinute;
  },

  getHour: function() {
    var hourCount = Math.floor(this.totalSeconds / 3600);

    if (hourCount < 10) {
      return "0" + hourCount;
    }

    return hourCount;
  },

  printTime: function() {
    return this.getHour() + ":" + this.getMinute() + ":" + this.getSeconds()
  },

  tick: function(startSecond) {

    if (startSecond > 0) {
      this.totalSeconds = startSecond;
    };

    setInterval(function() {
      console.log(this.printTime());
      this.totalSeconds += 1;
    }.bind(this), 1000);
  }
};

clock.tick(8900);
