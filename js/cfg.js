$('#lightSwitch').ready(function(){
    if(this.checked) {
        $('#lightSwitchLabel i').addClass('fa-sun-o');
        $('#lightSwitchLabel i').removeClass('fa-moon-o');
    }else{
        $('#lightSwitchLabel i').removeClass('fa-sun-o');
        $('#lightSwitchLabel i').addClass('fa-moon-o');
    }
});
$('#lightSwitch').change(function() {
    if(this.checked) {
        $('#lightSwitchLabel i').addClass('fa-sun-o');
        $('#lightSwitchLabel i').removeClass('fa-moon-o');
    }else{
        $('#lightSwitchLabel i').removeClass('fa-sun-o');
        $('#lightSwitchLabel i').addClass('fa-moon-o');
    }
});
//hide scroller
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $("#btnScrollTop").fadeOut();
    } else {
        $("#btnScrollTop").fadeIn();
    }
});
const scroll = new Scroller({
    // Type String
    btnUpSelector:".button-up",
});

// $('#boxCodeCustomer').change(function (e) { 
//     e.preventDefault();
//     var id = $(this).val();
//     $.ajax({
//         type: "post",
//         url: "localhost/"+id,
//         success: function (data) {
//             console.log(data);
//             $('#namaCust').text(data.nama);
//             $('#alamat').text(data.almt);
//         },error:function (data) { 
//             Swal.fire({
//                 icon: 'error',
//                 title: 'HALAH '+data.status,
//                 text: data.message
//             });
//         }
//     });
// });

// Expanding flexcard
$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });
$(document).ready(function () {
    $("#owl1, #owl2, #owl3").each(function () { 
        $(this).owlCarousel({
            loop:true,
            margin:10,
            // responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            }
        });
        // Custom Navigation Events
        $(".owl-next").click(function(){$(this).closest('.col-lg').find('.owl-carousel').trigger('owl.next');});
        $(".owl-prev").click(function(){$(this).closest('.col-lg').find('.owl-carousel').trigger('owl.prev');});
    });
    // Popup Modal
    // $("img").on('click',function (e) { 
    //     e.preventDefault();
    //     $("#mImg").attr("src", $(this).attr("src"));
    //     $("#myModal").modal('show');
    // });

    // Select2 Theme enabler
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })
    // Font selector
    $('#selector').change(function(){
        var ft = '';
        if ($(this).val() == "thunder") {
            ft = 'Thunderstorm, sans-serif';
        };
        if ($(this).val() == "bitter") {
            ft = '"Bitter", normal';
        };
        if ($(this).val() == "arial") {
            ft = '"Arial", Helvetica, sans-serif';
        };
        if ($(this).val() == "times") {
            ft = '"Times New Roman", Times, serif';
        };
        $('#df').css('font-family', ft);
    });
});
window.onload = function() {
    //Audio Config
    var settingAutoplay = 'yes';
    window.settingAutoplay = settingAutoplay === 'disable' ? false : true;
    var vid = document.getElementById("player");
    vid.volume = 0.5;
    $(".btn-player").click(function (e) { 
        e.preventDefault();
        if (vid.paused == false) {
            vid.pause();
            $(".btn-player i").addClass("fa-play");
            $(".btn-player i").removeClass("fa-pause");
            // alert('music paused');
        } else {
            vid.play();
            $(".btn-player i").addClass("fa-pause");
            $(".btn-player i").removeClass("fa-play");
            // alert('music playing');
        }
    });
    $(".btn-preload").click(function (e) {
        e.preventDefault();
        // $(".preload").toggleClass("ok");
        $(this).slideUp();
        $(".preload").slideUp(500,() => {
            // $(".preload").remove();
            vid.play();
            $(".btn-player i").addClass("fa-pause");
            $(".btn-player i").removeClass("fa-play");
        });
        // $(this).toggleClass("ok");
        // $(".preload").fadeToggle();
    });
    
}