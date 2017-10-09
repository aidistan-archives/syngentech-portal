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
    $(".animate img").mouseover(function() {//鼠标划入图片让其变大
      $(this).css({'transform': 'scale(0.95)'});
    });
    $(".animate img").mouseout(function() {//鼠标划出图片让其恢复原样
      $(this).css({'transform': 'scale(1)'});
    });

    // index page animation effects
    $(".animation img").mouseover(function() {
      $(this).css({'opacity': '0.85'});
    });
    $(".animation img").mouseout(function() {
      $(this).css({'opacity': '1'});
    });

    // close offCanvas
    var id = '#offcanvasId';
    var $myOc = $(id);
    $('.doc-oc-js').on('click', function() {
      $myOc.offCanvas($(this).data('rel'));
    });
  });

  $(document).on('ready', screenHeight);
  $(window).on('resize', screenHeight);

  function screenHeight() {
    $('.screen-height').height($(window).height());
  }

  //close wait layout
  var Interval=null;
  window.onload = function() {
    Interval=setInterval(function () {
      var size=  $('img','#slider').length;
      var i=0;
      $('img','#slider').each(function (i,n) {
        if(n.complete){
          i++;
        }
          $('.hide').show();
        if(i>2){
        // if(i==4){
          clearInterval(Interval);
          Interval=null;
          $('#slider').flexslider({
            directionNav:false,
            start:function () {
              $('.loading').hide();

              // $('img',"#imgLazy").each(function (i,n) {
              //   var $this=$(n);
              //   $this.attr('src',$this.attr('data-src'))
              // });
            }
          });
        }
      })
    },300)
  }


})(jQuery);
