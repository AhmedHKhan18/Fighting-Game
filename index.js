var arrows1 = document.getElementById("arrows1");
var arrows2 = document.getElementById("arrows2");
var character = document.getElementById("character");
// var character1 = document.getElementById("character1");
var user2 = document.getElementById("user2");
var user1 = document.getElementById("user1");
var punch = document.getElementById("punch");
var kick = document.getElementById("kick");
var select = document.getElementById("select");
var hBar = document.getElementsByClassName("health-bar");
var damage = document.getElementsByClassName("damage-random");
var hit = document.getElementsByClassName("hit");
var bar = document.getElementsByClassName("bar");

function play(){
    window.location.href = "play.html";
}
function change(){
    window.location.href = "character.html";
}
    arrows2.addEventListener("click", function next() {
        character1.src = "assets/character4.gif";
    });
    arrows2.addEventListener("click", function next() {
        character1.src = "assets/character1.gif";
        });
        arrows1.addEventListener("click", function prev() {
            character1.src = "assets/character3.gif";
    });

// else if(character1 == "/assets/character2.gif"){
//     arrows2.addEventListener("click", function next() {
//         character1.src = "assets/character3.gif";
//     });

// }
// punch.addEventListener("click", function punch1() {
//     user1.src = "assets/character5style.gif";
//     console.log("user1");
// });
// kick.addEventListener("click", function kick1() {
//     user2.src = "assets/character6style.gif";
//     console.log(user2);
// });
// function punch1() {
//         user1.src = "assets/character5style.gif";
//     }
// function punch1() {
//     user1.src = "assets/character1style2.gif";
// }

function punch1(){
    user1.src = "assets/character1style2.gif";
    setTimeout(function() {
        user1.src = "assets/character1.gif";
    }, 1000);
}
function kick1() {
    user1.src = "assets/character1style.gif";
     setTimeout(function() {
        user1.src = "assets/character1.gif";
    }, 1000);
}
function cpu(){
    user2.src = "assets/character1.gif";
    setInterval(function(){
        user2.src = "assets/character1style.gif";
        console.log(cpu);
    }, 1000);    
}
    select.addEventListener("click", function select1() {
        select.innerHTML = "Selected";
    });


$(document).ready(function(){
        var hitBtn = $('button.punch'),
            kick = $('button.kick'),
            hBar = $('.health-bar'),
            bar = hBar.find('.bar'),
            hit = hBar.find('.hit');
});
hitBtn.on("click", function(){
          var total = hBar.data('total'),
              value = hBar.data('value');

              if (value < 0) {
                              log("you dead, reset");
                        return;
                      }
                          // max damage is essentially quarter of max life
                          var damage = Math.floor(Math.random()*total);
                          // damage = 100;
                          var newValue = value - damage;
                          // calculate the percentage of the total width
                          var barWidth = (newValue / total) * 100;
                          var hitWidth = (damage / value) * 100 + "%";

                          // show hit bar and set the width
                          hit.css('width', hitWidth);
                          hBar.data('value', newValue);
                          
                          setTimeout(function(){
                            hit.css({'width': '0'});
                            bar.css('width', barWidth + "%");
                          }, 500);
                        //   bar.css('width', total - value);
                          
                          log(value, damage, hitWidth);
                          
                      if( value < 0){
                        log("DEAD");
                      }
                    });

                    



    // $(document).ready(function(){
    //     var hitBtn = $('button.damage'),
    //         reset = $('button.reset'),
    //         hBar = $('.health-bar'),
    //         bar = hBar.find('.bar'),
    //         hit = hBar.find('.hit');
        
    //     hitBtn.on("click", function(){
    //       var total = hBar.data('total'),
    //           value = hBar.data('value');
          
    //       if (value < 0) {
    //               log("you dead, reset");
    //         return;
    //       }
    //       // max damage is essentially quarter of max life
    //       var damage = Math.floor(Math.random()*total);
    //       // damage = 100;
    //       var newValue = value - damage;
    //       // calculate the percentage of the total width
    //       var barWidth = (newValue / total) * 100;
    //       var hitWidth = (damage / value) * 100 + "%";
          
    //       // show hit bar and set the width
    //       hit.css('width', hitWidth);
    //       hBar.data('value', newValue);
          
    //       setTimeout(function(){
    //         hit.css({'width': '0'});
    //         bar.css('width', barWidth + "%");
    //       }, 500);
    //       //bar.css('width', total - value);
          
    //       log(value, damage, hitWidth);
          
    //       if( value < 0){
    //         log("DEAD");
    //       }
    //     });
        
    //     reset.on('click', function(e){
    //       hBar.data('value', hBar.data('total'));
          
    //       hit.css({'width': '0'});
          
    //           bar.css('width', '100%');
    //           log("resetting health to 1000");
    //     });
    //   });
      
      
      
    //   function log(_total, _damage, _hitWidth){
    //     var log = $('.log');
        
    //     if(_damage !== undefined && _hitWidth !== undefined) {
    //         log.append("<div>H:"+_total+" D:"+_damage+" W:"+_hitWidth+" = " + (_total - _damage) + "</div>");
    //     } else {
    //       log.append("<div>"+_total+"</div>");
    //     }
    //   };