var season_count = $("#seasonsNav li").length;
alert("Seasons: " + season_count + " click last");
$("#seasonsNav li").eq(season_count - 1).trigger("click");
alert("Done clicking");
//	var episode_count = $(".episodeList li").length;
//	// $(".episodeList li").eq(episode_count - 1).trigger("click");
