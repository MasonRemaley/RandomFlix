//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

var season_count = $("#seasonsNav li").length;
var season = $("#seasonsNav li").eq(season_count - 1);
var loading = $(".ajaxLoading");

var episode_id = $(".episodeList li").eq(0).attr("data-episodeid");
season.trigger("click");

timer = setInterval(function()
{
  //if (loading.css != "block")
  if ($(".episodeList li").eq(0).attr("data-episodeid") != episode_id)
  {
    clearInterval(timer);
    
    var episode_count = $(".episodeList li").length;
    episode = $(".episodeList li").eq(0);
    //alert(episode.attr("data-episodeid"));
    //alert("Click 0");
    $(".episodeList li").eq(0).trigger("click");
    //alert("Episodes: " + episode_count);
  }
}, 100);

