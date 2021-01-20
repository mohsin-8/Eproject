
/* For Search Bar */
$(document).on('click','.search', function() {
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancle', function() {
    $('.search-bar').removeClass('search-bar-active')
});

/* login-signUp form */
$(document).on('click','.user,.already-account', function() {
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click','.sign-up-btn', function() {
    $('.form').addClass('sign-up-active').removeClass('login-active') 
});


$(document).on('click','.form-cancle', function() {
    $('.form').removeClass('login-active') .removeClass('sign-up-active')
});

$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

  /*--For-Product-SLider----------------*/
  $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


  /*--For-make-Menu-responsive------------*/
  $(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});