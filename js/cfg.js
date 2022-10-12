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

$('#boxCodeCustomer').change(function (e) { 
    e.preventDefault();
    var id = $(this).val();
    $.ajax({
        type: "post",
        url: "localhost/"+id,
        success: function (data) {
            console.log(data);
            $('#namaCust').text(data.nama);
            $('#alamat').text(data.almt);
        },error:function (data) { 
            Swal.fire({
                icon: 'error',
                title: 'HALAH '+data.status,
                text: data.message
            });
        }
    });
});