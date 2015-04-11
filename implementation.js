var season_count = $("#seasonsNav li").length;
alert("Seasons: " + season_count);

$("#seasonsNav li").eq(season_count - 1).triggerHandler("click");
//	var episode_count = $(".episodeList li").length;
//	// $(".episodeList li").eq(episode_count - 1).trigger("click");
