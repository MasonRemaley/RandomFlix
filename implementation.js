var RandomFlix = new function()
{
	this.count_episodes = function()
	{
		alert("Number Of Seasons: " + $("#seasonsNav li").length)
		alert("Number Of Episodes In This Season: " + $(".episodeList li").length);
		
		$("#seasonsNav li").eq(2).trigger("click");
	}
};
