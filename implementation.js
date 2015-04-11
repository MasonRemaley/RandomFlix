var RandomFlix = new function()
{
	this.count_episodes = function()
	{
		//alert("Number Of Seasons: " + $("#seasonsNav li").length)
		//alert("Number Of Episodes In This Season: " + $(".episodeList li").length);
		alert("Async");
		
		var season_count = $("#seasonsNav li").length;
		
		$.when(
			$("#seasonsNav li").eq(season_count - 1).trigger("click");
		).done(function()
		{
			var episode_count = $(".episodeList li").length;
			$(".episodeList li").eq(episode_count - 1).trigger("click");
		});
	}
};
