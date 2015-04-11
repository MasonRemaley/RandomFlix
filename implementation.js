//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

var season_count = $("#seasonsNav li").length;
//alert("Seasons: " + season_count + " click last");

var season = $("#seasonsNav li").eq(season_count - 1);
var loading = $(".ajaxLoading");
//alert(season.hasClass("selected"));
//alert(loading.css("display"));
season.trigger("click");
//alert(loading.css("display"));

timer = setInterval(function()
{
  //alert(loading.css("display"));
  
  if (loading.css != "block")
  {
    clearInterval(timer);
    alert("Done: " + loading.css("display"));
  }
}, 100);
//while (loading.css("display") == "block") {}

//while (loading.css("display") != "none") {}

//alert(season.hasClass("selected"));

//var episode_count = $(".episodeList li").length;
//alert("Episodes: " + episode_count);
