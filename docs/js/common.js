'use strict';

$(document).ready(function(){
    $('.welcome__img img').animate({'margin-left': '0'});

    ;function counterDown(){
        var deadline = '2017-10-31';

        function getTimeRemaining(endtime){
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor( (t/1000) % 60 );
            var minutes = Math.floor( (t/1000/60) % 60 );
            var hours = Math.floor( (t/(1000*60*60)) % 24 );
            var days = Math.floor( t/(1000*60*60*24) );
            return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };
        }

        function initializeClock(id, endtime){
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.js-days');
            var hoursSpan = clock.querySelector('.js-hours');
            var minutesSpan = clock.querySelector('.js-minutes');
            var secondsSpan = clock.querySelector('.js-seconds');

            function updateClock(){
                var t = getTimeRemaining(endtime);
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = t.hours;
                minutesSpan.innerHTML = t.minutes;
                secondsSpan.innerHTML = t.seconds;            
                if(t.total<=0){
                clearInterval(timeinterval);
                }
            }

                updateClock(); // запустите функцию один раз, чтобы избежать задержки
                var timeinterval = setInterval(updateClock,1000);
        }

        initializeClock('js-counter', deadline);
    }
    counterDown();

// var $elements = $('button');
//     ;function buttonAnimate(){
        
//         for (var i = 0; i < $elements.length; i++) {
//             setTimeout(function(i) {
//                 return function() {
//                 $($elements[i])
//                     .animate({color: '#FA4141'}, 200)
//                     .delay(100)
//                     .animate({color: '#4D4D4D'}, 200)
//                 }
//             }(i), i * 150);
//         }
//     }
//     buttonAnimate();
});

