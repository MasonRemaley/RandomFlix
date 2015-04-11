var RandomFlix = new function()
{
	this.count_episodes = function()
	{
		//alert("Number Of Seasons: " + $("#seasonsNav li").length)
		//alert("Number Of Episodes In This Season: " + $(".episodeList li").length);
		
		var seasons = $("#seasonsNav li").length;
		$("#seasonsNav li").eq(seasons - 1).trigger("click");
	}
};
