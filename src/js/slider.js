var winWidth;
var pos = 0;
var items = $("#mold li").length;

// var winWidth = $(window).width();

$(function() {
  items = $("#mold li").length;
  winWidth = $(window).width();
  //console.log(items);
  sizReset(winWidth);

  $(window).resize(function () {
    winWidth = $(window).width();
    sizReset(winWidth, pos);
    console.log(pos);
  });

  $("#nextBtn").on("click", function() {
    console.log(pos);
    winWidth = $(window).width();

    if(pos === items-1) {
      pos = 0;
      $("#mold:not(:animated)").stop().animate({"marginLeft":"0px"}, 300, "swing", function() {

      });
    } else {
      pos++;
      nextMove(winWidth, pos);
    }
  });
  $("#prevBtn").on("click", function() {
    console.log(pos);
    winWidth = $(window).width();

    if(pos === 0) {
      pos = items-1;
      $("#mold:not(:animated)").stop().animate({"marginLeft":"-"+winWidth*pos+"px"}, 300, "swing", function() {

      });
    } else {
      pos--;
      prevMove(winWidth, pos);
    }
  });

});

function sizReset(winSize, pos) {
  $("#sliderArea").css({"height":winSize/2+"px"});
  $("#mold").css({"width":winSize*items+"px","height":winSize/2+"px","marginLeft":"-"+winSize*pos+"px"});
  $("#mold li").css({"width":winSize+"px","height":winSize/2+"px"});

}
function nextMove(widSize, pos) {
  $("#mold:not(:animated)").stop().animate({"marginLeft":"-="+widSize+"px"}, 300, "swing", function() {

  });
}
function prevMove(widSize, pos) {
  $("#mold:not(:animated)").stop().animate({"marginLeft":"+="+widSize+"px"}, 300, "swing", function() {

  });
}
