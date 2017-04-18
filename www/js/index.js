var card_list = [];

var shapes_svg = {
  "oval":
    '<svg width="41px" height="66px" viewBox="0 0 41 66" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M1.99430904,33.2967724 C1.99430902,56.3155307 3.53734099,64.685202 21.2372553,64.685202 C38.9371697,64.685202 38.2187481,54.980112 38.2187481,33.2967724 C38.2187481,11.6134327 38.2187467,1.93288177 20.1073724,1.93288177 C1.99599814,1.93288177 1.99430905,10.278014 1.99430904,33.2967724 Z" id="Path-1" stroke="#979797"></path><g id="Group" transform="translate(2.000000, 4.000000)" stroke="#979797" stroke-linecap="square"><path d="M5.5,1.5 L30.4999996,1.5" id="Line"></path><path d="M1.5,7.5 L34.4999996,7.5" id="Line"></path><path d="M0.499999997,13.5 L35.4999996,13.5" id="Line"></path><path d="M0.0803261927,19.5 L36.0116844,19.5" id="Line"></path><path d="M0.189069922,25.5 L36.0282326,25.5" id="Line"></path><path d="M0.100251286,31.5 L36.1501475,31.5" id="Line"></path><path d="M0.474437783,37.5 L35.976902,37.5" id="Line"></path><path id="Line"></path><path d="M1.78029408,49.5 L34.4999996,49.5" id="Line"></path><path d="M0.450460127,43.5 L35.5000016,43.5" id="Line"></path><path d="M4.4316024,55.5 L32.8698062,55.5" id="Line"></path></g></g></svg>',
  "squiggle":
    '<svg width="25px" height="49px" viewBox="0 0 25 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-2" transform="translate(1.000000, 0.000000)" stroke="#979797"><path d="M13.9859396,41.3895385 C24.0418895,26.8348753 22.8006769,25.4945136 15.1346627,18.2418796 C7.46864854,10.9892455 17.1292182,14.5921737 21.8433772,5.8497416 C26.8504774,-3.43595126 8.44321261,2.34623433 5.48948598,4.09917085 C-0.800966282,7.83234081 0.741294619,14.4904499 2.39734081,19.6000736 C4.83099526,27.1089574 20.4632502,24.4831699 2.39734065,37.0640948 C-3.81389174,41.389537 3.92998974,55.9442017 13.9859396,41.3895385 Z" id="Path-1"></path><g id="Group" transform="translate(0.000000, 2.000000)" stroke-linecap="square"><path d="M7.50000001,1.5 L22.5000004,1.5" id="Line"></path><path d="M1.50000001,7.5 L18.5000004,7.5" id="Line"></path>                <path d="M2,13.5 L12.5000004,13.5" id="Line"></path>                <path d="M3.5,19.5 L18.4999997,19.5" id="Line"></path>                <path d="M11.5,25.5 L20.4999997,25.5" id="Line"></path><path d="M7.5,31.5 L18.5000003,31.5" id="Line"></path><path d="M1.33333333,37.5 L14.4999997,37.5" id="Line"></path><path d="M1.5,43.5 L10.4999997,43.5" id="Line"></path></g></g></g></svg>',
  "diamond":
    '<svg width="35px" height="106px" viewBox="0 0 55 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><polygon id="path-1" points="55.0116993 53.0000015 27.8751083 105.124892 0.420043548 53.0000015 27.8751083 0.875108319"></polygon><mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="54.5916557" height="104.249783" fill="white"><use xlink:href="#path-1"></use></mask></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-2" stroke="#979797"><use id="Rectangle-1" mask="url(#mask-2)" stroke-width="2" xlink:href="#path-1"></use><g id="Group" transform="translate(1.000000, 3.000000)" stroke-linecap="square"><path d="M25.5,1.5 L27.5000001,1.5" id="Line"></path><path d="M22.5,7.5 L30.4999996,7.5" id="Line"></path><path d="M19.5,13.5 L33.4999996,13.5" id="Line"></path><path d="M16.5,19.5 L37.4999996,19.5" id="Line"></path><path d="M13.5,25.5 L40.4999996,25.5" id="Line"></path><path d="M10.5,31.5 L43.4999996,31.5" id="Line"></path><path d="M7.5,37.5 L46.4999991,37.5" id="Line"></path><path d="M3.5,43.5 L49.4999996,43.5" id="Line"></path><path d="M0.499999997,49.5 L52.8462295,49.5" id="Line"></path><path d="M3.5,55.5 L50.4999996,55.5" id="Line"></path><path d="M6.5,61.5 L46.4999996,61.5" id="Line"></path><path d="M9.5,67.5 L43.4999996,67.5" id="Line"></path><path d="M6.3886765,61.5 L43.5547189,61.5" id="Line"></path><path d="M12.5,73.5 L40.4999996,73.5" id="Line"></path><path d="M15.5,79.5 L37.4999996,79.5" id="Line"></path><path d="M19.5,85.5 L34.4999996,85.5" id="Line"></path><path d="M22.5,91.5 L31.4999996,91.5" id="Line"></path><path d="M25.5,97.5 L28.5,97.5" id="Line"></path></g></g></g></svg>',
};



 /**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
// var app = {
//     // Application Constructor
//     initialize: function() {
//         document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//
//     },
//
//     // deviceready Event Handler
//     //
//     // Bind any cordova events here. Common events are:
//     // 'pause', 'resume', etc.
//     onDeviceReady: function() {
//         this.receivedEvent('deviceready');
//     },
//
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//
//     }
// };

// app.initialize();

function generate_cards() {
  var shapes = ["diamond", "squiggle", "oval"];
  var colors = ["green", "purple", "red"];
  var numbers = ["one", "two", "three"];
  var fills = ["solid", "outline", "stripe"];
  var cards = [];
  for (s = 0; s < shapes.length; s++) {
    for (c = 0; c < colors.length; c++) {
      for (n = 0; n < numbers.length; n++) {
        for (f = 0; f < fills.length; f++) {
          cards.push({
            shape: shapes[s],
            color: colors[c],
            number: numbers[n],
            fill: fills[f],
            id: numbers[n] + colors[c] + fills[f] + shapes[s],
            content: shapes_svg[shapes[s]].repeat(n + 1),
          });
        }
      }
    }
  }
  return cards;
}

var main = new Vue({
  el: "#app",
  data: {
    active_cards: [],
    card_list: [],
    groups_found: 0,
    counter: 0,
    seconds_remaining: 0,
    endless: false,
    state: "over",
    timer: setInterval(function () {
      if (main.$data.state == "run") {
        main.$data.seconds_remaining -= 1;
        if (main.$data.seconds_remaining < 1) {
          main.end_game();
        }
      }
    }, 1000),
  },
  methods: {
    end_game: function () {
      this.state = "over";
      $(".overlay").removeClass("hidden");
      $('.active').removeClass('active');
    },
    start_game: function (endless) {
      this.active_cards = [];
      this.card_list = [];
      this.groups_found = 0;
      this.counter = 0;
      this.seconds_remaining = 0;
      this.endless = false;

      if (this.state != "run") {
        $('.overlay').removeClass('initial')
        this.state = "run";
        this.endless = endless;
        this.active_cards = [];
        this.seconds_remaining = Number($('#option-time').val());
        if (endless) {
          clearInterval(this.timer);
        }

        $(".overlay").addClass("hidden");
        this.card_list = generate_cards();
        shuffle(this.card_list);

        for (var i = 0; i < 18; i++) {
          this.card_list[this.counter].num = i;
          this.active_cards.push(this.card_list[this.counter]);
          this.counter += 1;
        }
      }
    },
    select_card: function (event) {
      selected_cards = $(".active");
      console.log(event.target, selected_cards);
      if (selected_cards.length < 3) {
        if (event.target.classList.contains('card')) {
          $(event.target).toggleClass('active');
        } else {
          $(event.target).parents('.card').toggleClass("active");
        }
        selected_cards = $('.active');
      }
      if (selected_cards.length == 3) {
        if (this.check_set(selected_cards)) {
          this.seconds_remaining += 15;
          this.groups_found += 1;
          this.replace_cards(selected_cards);
          this.sets_found.push($(selected_cards).clone());
        } else {
          $('.active').addClass('error');
          setTimeout(function () {
            (function () {
              $('.error').removeClass('error');
            })();
          }, 1000);
          $('.active').removeClass("active");
        }
      }
    },
    check_set: function (selected_cards) {
      shapes = {};
      colors = {};
      numbers = {};
      fills = {};
      for (var i = 0; i < selected_cards.length; i++) {
        shapes[selected_cards[i].getAttribute('data-shape')] = true;
        colors[selected_cards[i].getAttribute('data-color')] = true;
        numbers[selected_cards[i].getAttribute('data-number')] = true;
        fills[selected_cards[i].getAttribute('data-fill')] = true;
      }
      // Ensure that all properties of each card are either exactly the same or different.
      return (Object.keys(shapes).length != 2 && Object.keys(colors).length != 2 && Object.keys(fills).length != 2 && Object.keys(numbers).length != 2);
    },
    replace_cards: function (selected_cards) {
      $(selected_cards).addClass('success');
      for (var i = 0; i < selected_cards.length; i++) {
        (function (index, that, cards) {
          card = $(cards[index]);
          num = Number(card.attr("data-num"));
          that.card_list[that.counter].num = num;
          that.active_cards.splice(num, 1, that.card_list[that.counter]);
          that.counter += 1;
        })(i, this, selected_cards);
      }
      $('.active').removeClass('active');
      setTimeout(function () {
        (function () {
          $('.success').removeClass('success');
        })();
      });
    },
    exit_game: function () {
      navigator.app.exitApp();
    },
  },
});

$('#option-time').on('input', function (e) {
  $('#option-time-label').text($(this).val());
});

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    if (main.$data.state == "run") {
      main.end_game();
    } else {
      main.exit_game();
    }
}
