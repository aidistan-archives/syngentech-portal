$(document).on('ready', screenHeight);
$(window).on('resize', screenHeight);
$(window).on('load',color);
function screenHeight() {
  $('[screen-height]').height($(window).height());
}
function color() {
  var oLink1 = document.getElementById("link1");
  var oLink6 = document.getElementById("link6");
  var oLink8 = document.getElementById("link8");
  var oLink10 = document.getElementById("link10");
  var oLink12 = document.getElementById("link12");
  var oLink14 = document.getElementById("link14");
  var oImg1 = document.getElementById("img1");
  var oImg6 = document.getElementById("img6");
  var oImg8 = document.getElementById("img8");
  var oImg10 = document.getElementById("img10");
  var oImg12 = document.getElementById("img12");
  var oImg14 = document.getElementById("img14");
  oLink1.onmouseover = function() {
   oImg1.setAttribute("src","images/c1.jpg");
 };
  oLink1.onmouseout = function() {
    oImg1.setAttribute("src","images/1.jpg");
  };
  oLink8.onmouseover = function() {
    oImg8.setAttribute("src","images/c3.jpg");
  };
  oLink8.onmouseout = function() {
    oImg8.setAttribute("src","images/8.jpg");
  };
  oLink10.onmouseover = function() {
    oImg10.setAttribute("src","images/c4.jpg");
  };
  oLink10.onmouseout = function() {
    oImg10.setAttribute("src","images/10.jpg");
  };
  oLink12.onmouseover = function() {
    oImg12.setAttribute("src","images/c5.jpg");
  };
  oLink12.onmouseout = function() {
    oImg12.setAttribute("src","images/12.jpg");
  };
  oLink14.onmouseover = function() {
    oImg14.setAttribute("src","images/c7.jpg");
  };
  oLink14.onmouseout = function() {
    oImg14.setAttribute("src","images/14.jpg");
  };
  var sLink6 = document.getElementById("slink6");
  var sLink10 = document.getElementById("slink10");
  var sImg6 = document.getElementById("simg6");
  var sImg10 = document.getElementById("simg10");
  sLink6.onmouseover = function() {
    sImg6.setAttribute("src","images/c2.jpg");
  };
  sLink6.onmouseout = function() {
    sImg6.setAttribute("src","images/s6.jpg");
  };
  sLink10.onmouseover = function() {
    sImg10.setAttribute("src","images/c7.jpg");
  };
  sLink10.onmouseout = function() {
    sImg10.setAttribute("src","images/s10.jpg");
  };
  var tlink6 = document.getElementById("tlink6");
  var tlink10 = document.getElementById("tlink10");
  var tlink13 = document.getElementById("tlink13");
  var timg6 = document.getElementById("timg6");
  var timg10 = document.getElementById("timg10");
  var timg13 = document.getElementById("timg13");
  tlink6.onmouseover = function() {
    timg6.setAttribute("src","images/c2.jpg");
  };
  tlink6.onmouseout = function() {
    timg6.setAttribute("src","images/t6.jpg");
  };
  tlink10.onmouseover = function() {
    timg10.setAttribute("src","images/c7.jpg");
  };
  tlink10.onmouseout = function() {
    timg10.setAttribute("src","images/t10.jpg");
  };
  tlink13.onmouseover = function() {
    timg13.setAttribute("src","images/c3.jpg");
  };
  tlink13.onmouseout = function() {
    timg13.setAttribute("src","images/t13.jpg");
  };
}
