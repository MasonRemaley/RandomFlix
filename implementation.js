alert("Run bookmarklet");
//alert("Number Of Seasons: " + $("#seasonsNav li").length)
//alert("Number Of Episodes In This Season: " + $(".episodeList li").length);
var season_count = $("#seasonsNav li").length;

//$.when(
$("#seasonsNav li").eq(season_count - 1).triggerHandler("click");
//).done(function()
//{
//	var episode_count = $(".episodeList li").length;
//	alert("Number of episodes: " + episode_count);
//	// $(".episodeList li").eq(episode_count - 1).trigger("click");
//});
