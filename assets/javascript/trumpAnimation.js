// Animate Characters Start



// var cartoonFileLeft = 'assets/images/PlayersL/' + team + 'L.png';


masterAnimate("left", "right")

// runIt();
function masterAnimate(trumpLeft, trumpRight) {
    animate1()
    // $('#textUpdate1').hide();
    $('#trump-left').append(trumpLeft);
    $('#trump-left').css("visibility", "hidden");
    // $('#characterLeft').css('z-index', 2000);

    $('#trump-right').append(trumpRight);
    $('#trump-right').css("visibility", "hidden");;

  

    // setTimeout(function(){ $("img[data-playerteamnumber='1']").css("visibility", "visible"); }, 1600);

    // setTimeout(function(){ $("img[data-playerteamnumber='2']").css("visibility", "visible"); }, 3600);

    function animate1 () {
        var themesong = new Audio('./assets/sound/incredibox.mp3');
        themesong.volume = 1;
        themesong.play();

        function ram1(){
        var hit1 = new Audio('./assets/sound/trumpfakenews.mp3');
        hit1.volume = .5;
        hit1.play();
        }
        
        setTimeout(ram1, 1000*9);


        // function ram2(){
        // var hit2 = new Audio('assets/sound/Football_Hit_Tackle14.mp3');
        // hit2.play();
        // }
        // setTimeout(ram2, 1000*14);


        // function ram3(){
        // var hit3 = new Audio('assets/sound/Football_Hit_Tackle12.mp3');
        // hit3.play();
        // }
        // setTimeout(ram3, 1000*20);


    function runIt1() {
        // $('#textUpdate1').html('Lets go ' + characterImageLeft.data().team + '!!! ');
        // $('#textUpdate1').append(' Lets go ' + characterImageLeft.data().team + '!!!');
        // $('#textUpdate1').addClass('red-text');
        // $('#textUpdate1').show();

        $("#trump-left")
        .show( "slow" )
        .delay( 9000 )
        // charge right 1
        .animate({ left: "+=200" }, 300 )
        // manual shake
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )

        // slide back left
        .animate({ left: "-=200" }, 1000 )
        .delay( 3000 )

        //charge right 2
        .animate({ left: "+=200" }, 300 )
        //manual shake
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )

        // slide back left
        .animate({ left: "-=200" }, 1000 )
        .delay( 4500 )

        //charge right 3
        .animate({ left: "+=200" }, 300 )
        //manual shake
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )

        // slide back left
        .animate({ left: "-=200" }, 1000 )


        }

    runIt1()


    };



    // Animate Player 2

    animate2()
    function animate2 () {


    // var div2 = $( "#characterRight" );

    function runIt2() {
      $("#trump-right")
        .show( "slow" )
        .delay( 9000 )
        // charge right 1
        .animate({ left: "-=200" }, 300 )
        // manual shake
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )

        // slide back left
        .animate({ left: "+=200" }, 1000 )
        .delay( 3000 )

        //charge right 2
        .animate({ left: "-=200" }, 300 )
        //manual shake
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )

        // slide back left
        .animate({ left: "+=200" }, 1000 )
        .delay( 4500 )

        //charge right 3
        .animate({ left: "-=200" }, 300 )
        //manual shake
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )

        // slide back left
        .animate({ left: "+=200" }, 1000 )

        }
    runIt2()
    // runIt2()

    };

    // showIt();
};

// Animate Characters End











