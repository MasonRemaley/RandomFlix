var RandomFlix = new function()
{
	this.count_episodes = function()
	{
		//alert("Number Of Seasons: " + $("#seasonsNav li").length)
		//alert("Number Of Episodes In This Season: " + $(".episodeList li").length);
		alert("Play last episode of last season");
		
		var season_count = $("#seasonsNav li").length;
		$("#seasonsNav li").eq(season_count - 1).trigger("click");
		
		var episode_count = $(".episodeList li").length;
		$(".episodeList li").eq(episode_count - 1).trigger("click");
	}
};
