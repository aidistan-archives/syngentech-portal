(function($) {
  $(document).on('ready', function() {
    // 二级菜单的显示与隐藏
    $('.am-dropdown').has('ul').mouseover(function (){
      $(this).children("ul").show();
    }).mouseout(function (){
      $(this).children("ul").hide();
    });

    // 三级菜单的显示与隐藏
    $('.list').has('ul').mouseover(function (){
      $(this).children("ul").show();
    }).mouseout(function (){
      $(this).children("ul").hide();
    });

    // index page animation effects
    $(".animate img").mouseover(function() {
      $(this).css({'transform': 'scale(0.95)'});
    });
    $(".animate img").mouseout(function() {
      $(this).css({'transform': 'scale(1)'});
    });

    // index page animation effects
    $(".animation img").mouseover(function() {
      $(this).css({'opacity': '0.85'});
    });
    $(".animation img").mouseout(function() {
      $(this).css({'opacity': '1'});
    });
  });

  $(document).on('ready', screenHeight);
  $(window).on('resize', screenHeight);

  function screenHeight() {
    $('.screen-height').height($(window).height());
  }

  // Close wait layout
  window.onload = function() {
    var interval = setInterval(function () {
      var count = 0;

      $('img','#slider').each(function (_, n) {
        if(n.complete) count += 1;
        if(count < 1) return;

        clearInterval(interval);
        interval = null;
        $('.hide').show();
        $('#slider').flexslider({
          directionNav:false,
          start:function () { $('.loading').hide() }
        });
      })
    }, 500)
  }
})(jQuery);
