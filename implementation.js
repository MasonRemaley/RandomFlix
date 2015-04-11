//what if implementation.js loads BEFORE jquery? won't this script then FAIL?
 $(".episodeList li").eq(0).trigger("click");
/*var season_count = $("#seasonsNav li").length;
var season = $("#seasonsNav li").eq(season_count - 1);
var loading = $(".ajaxLoading");

season.trigger("click");

timer = setInterval(function()
{
  if (loading.css != "block")
  {
    clearInterval(timer);
    
    var episode_count = $(".episodeList li").length;
    alert("Click 0");
    $("#episodeList li").eq(0).trigger("click");
    //alert("Episodes: " + episode_count);
  }
}, 100);*/

