//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

var season_count = $("#seasonsNav li").length;
alert("Seasons: " + season_count + " click last");

$.when(
  $("#seasonsNav li").eq(season_count - 1).trigger("click")
).done(function()
{
  var episode_count = $(".episodeList li").length;
  alert("Episodes: " + episode_count);
});
