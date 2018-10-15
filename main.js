// myfunc = function () {
//   items = ["2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "ja", "qa", "ka"]
//   var total = items.length
//   var num = Math.floor(Math.random() * items.length)
//   var item = items[num];
//   items.splice(num, 1)
//   console.log(num)
//   console.log(item)
//   console.log(total)
// }

window.onload = function() {
  var app = new Vue({
    el: "#app",
    data: {
      inone: "",
      total: 0,
      tc: 0,
      tens: 20,
      mids: 12,
      lows: 20
    },
    computed: {
      cardsLeft() {
        left = this.tens + this.mids + this.lows;
        return left;
      },
      play() {
        if (this.total > 0) {
          return {
            myboo: true,

            mystr: "more high cards"
          };
        } else if (this.total < 0) {
          return {
            myboo: false,

            mystr: "more low cards"
          };
        } else {
          return {
            myboo: null,
            mystr: "equal cards"
          };
        }
      }
    },
    methods: {
      restart() {
        this.tens = 20;
        this.lows = 20;
        this.mids = 12;
      },
      checker() {
        if (this.inone == 0) {
          this.total = this.total - 1;
          this.inone = "";
        }
        if (this.inone > 0 && this.inone < 7) {
          this.total = this.total + 1;
          this.inone = "";
        } else {
          this.inone = "";
        }
        this.tc = this.tc + 1;
      },
      high() {
        if (this.tens > 0) {
          this.total = this.total - 1;
          this.tens = this.tens - 1;
          this.tc = this.tc + 1;
        } else {
          alert("no tens left!");
        }
      },
      low() {
        if (this.lows > 0) {
          this.total = this.total + 1;
          this.lows = this.lows - 1;
          this.tc = this.tc + 1;
        } else {
          alert("no lows left!");
        }
      },
      med() {
        if (this.mids > 0) {
          this.total = this.total;
          this.mids = this.mids - 1;
          this.tc = this.tc + 1;
        } else {
          alert("no mids left!");
        }
      }
    }
  });
};
