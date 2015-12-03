(function($) {
  $(document).on('ready', function() {
    //二级菜单的显示与隐藏
    $('.am-dropdown').has('ul').mouseover(function (){
		  $(this).children("ul").show();
    }).mouseout(function (){
		  $(this).children("ul").hide();
    });

   //关闭侧边栏
    var id = '#offcanvasId';
    var $myOc = $(id);
    $('.doc-oc-js').on('click', function() {
      $myOc.offCanvas($(this).data('rel'));
    });
  })
})(jQuery);
