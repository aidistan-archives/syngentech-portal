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

    // 合生基因页面的动画效果
    $(".animate img").mouseover(function() {//鼠标划入图片让其变大
		$(this).css({'transform': 'scale(0.95)'});
  	});
	 $(".animate img").mouseout(function() {//鼠标划出图片让其恢复原样
		$(this).css({'transform': 'scale(1)'});
  	});

    // 关闭侧边栏
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
})(jQuery);
