//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

var season_count = $("#seasonsNav li").length;
var season = $("#seasonsNav li").eq(season_count - 1);
var loading = $(".ajaxLoading");

season.trigger("click");

timer = setInterval(function()
{
  if (loading.css != "block")
  {
    clearInterval(timer);
    
    var episode_count = $(".episodeList li").length;
    $("#episodeList li").eq(episode_count - 1).trigger("click");
    //alert("Episodes: " + episode_count);
  }
}, 100);

