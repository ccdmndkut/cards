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

window.onload = function () {
  var app = new Vue({
    el: "#app",
    data: {
      inone: "",
      total: 0,
      tc: 0,
      tens: 20,
      mids: 12,
      lows: 20,
      cards: ['h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', 'ha', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'da', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ca', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'sa'],
      cardsobj: [{
          'heart'
          2 'heart: 2
        },
        {
          'heart3': 3
        },
        {
          'h4': 4
        },
        {
          'h5': 5
        },
        {
          'h6': 6
        },
        {
          'h7': 7
        },
        {
          'h8': 8
        },
        {
          'h9': 9
        },
        {
          'h10': 10
        },
        {
          'hj': 10
        },
        {
          'hq': 10
        },
        {
          'hk': 10
        },
        {
          'ha': 11
        },
        {
          's2': 2
        },
        {
          's3': 3
        },
        {
          's4': 4
        },
        {
          's5': 5
        },
        {
          's6': 6
        },
        {
          's7': 7
        },
        {
          's8': 8
        },
        {
          's9': 9
        },
        {
          's10': 10
        },
        {
          'sj': 10
        },
        {
          'sq': 10
        },
        {
          'sk': 10
        },
        {
          'sa': 11
        },
        {
          'c2': 2
        },
        {
          'c3': 3
        },
        {
          'c4': 4
        },
        {
          'c5': 5
        },
        {
          'c6': 6
        },
        {
          'c7': 7
        },
        {
          'c8': 8
        },
        {
          'c9': 9
        },
        {
          'c10': 10
        },
        {
          'cj': 10
        },
        {
          'cq': 10
        },
        {
          'ck': 10
        },
        {
          'ca': 11
        },
        {
          'd2': 2
        },
        {
          'd3': 3
        },
        {
          'd4': 4
        },
        {
          'd5': 5
        },
        {
          'd6': 6
        },
        {
          'd7': 7
        },
        {
          'd8': 8
        },
        {
          'd9': 9
        },
        {
          'd10': 10
        },
        {
          'dj': 10
        },
        {
          'dq': 10
        },
        {
          'dk': 10
        },
        {
          'da': 11
        },
      ],
      shuffled: []
    },
    computed: {
      shuffle() {
        var array = this.cardsobj
        var i = 0,
          j = 0,
          temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        return array
      },
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
      shufflemeth() {
        var array = this.cards
        var i = 0,
          j = 0,
          temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        this.cards = array
      },
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
          console.log('cards');
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