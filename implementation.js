//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

alert("Attach CSS change event 1");
var season_count = $("#seasonsNav li").length;
alert("Seasons: " + season_count + " click last");

$("#seasonsNav li").eq(season_count - 1).bind("cssClassChanged", function()
{
  alert("Class changed!");
});

$("#seasonsNav li").eq(season_count - 1).trigger("click");
//var episode_count = $(".episodeList li").length;
//alert("Episodes: " + episode_count);
