var winWidth, studs;
var pos = 0;
var items = $("#mold li").length;

$(function() {
  items = $("#mold li").length;
  winWidth = $(window).width();
  studs =  "<ul id='studs'>";
  for (var i = 0; i < items; i++) {
    studs +=  "<li class='studsInner'>";
    studs +=    "<a class="+[i]+" href='javascript:void(0)' title='studs'>";
    studs +=    "</a>";
    studs +=  "</li>";
  }
  studs += "</ul>";
  $("#studArea").html(
    studs
  );
  $("#studs li a.0").css({"backgroundColor":"tomato"});

  sizReset(winWidth);

  $(window).resize(function () {
    winWidth = $(window).width();
    sizReset(winWidth, pos);
  });

  $("#nextBtn").on("click", function() {
    winWidth = $(window).width();
    $("#studs li a").css({"background":"none"});
    if(pos === items-1) {
      pos = 0;
      $("#mold:not(:animated)").stop().animate({"marginLeft":"0px"}, 300, "swing");
      $("#studs li a."+pos).css({"backgroundColor":"tomato"});
    } else {
      pos++;
      nextMove(winWidth, pos);
      $("#studs li a."+pos).css({"backgroundColor":"tomato"});
    }
  });

  $("#prevBtn").on("click", function() {
    winWidth = $(window).width();
    $("#studs li a").css({"background":"none"});
    if(pos === 0) {
      pos = items-1;
      $("#mold:not(:animated)").stop().animate({"marginLeft":"-"+winWidth*pos+"px"}, 300, "swing");
      $("#studs li a."+pos).css({"backgroundColor":"tomato"});
    } else {
      pos--;
      prevMove(winWidth, pos);
      $("#studs li a."+pos).css({"backgroundColor":"tomato"});
    }
  });

  $("#studs li a").click(function() {
    winWidth = $(window).width();
    $("#studs li a").css({"background":"none"});
    $(this).css({"backgroundColor":"tomato"});
    pos = Number($(this).attr("class"));
    $("#mold:not(:animated)").stop().animate({"marginLeft":"-"+winWidth*pos+"px"}, 300, "swing");
  });

});

function sizReset(winSize, pos) {
  $("#sliderArea").css({"height":winSize/2+"px"});
  $("#mold").css({"width":winSize*items+"px","height":winSize/2+"px","marginLeft":"-"+winSize*pos+"px"});
  $("#mold li").css({"width":winSize+"px","height":winSize/2+"px"});
}
function nextMove(widSize, pos) {
  $("#mold:not(:animated)").stop().animate({"marginLeft":"-="+widSize+"px"}, 300, "swing");
}
function prevMove(widSize, pos) {
  $("#mold:not(:animated)").stop().animate({"marginLeft":"+="+widSize+"px"}, 300, "swing");
}
