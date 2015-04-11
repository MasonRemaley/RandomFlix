//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

function RandomFlix()
{
  function random(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  //Get season information
  var season_count = $("#seasonsNav li").length;
  var season_number = random(0, season_count);
  var season = $("#seasonsNav li").eq(season_number - 1);
  var first_episode_id = $(".episodeList li").eq(0).attr("data-episodeid");
  
  //Click on a season
  season.trigger("click");
  
  //Wait until the season updates
  timer = setInterval(function()
  {
    if ($(".episodeList li").eq(0).attr("data-episodeid") != first_episode_id)
    {
      clearInterval(timer);
      
      //Click on the last episode
      var episode_count = $(".episodeList li").length;
      episode = $(".episodeList li").eq(0);
      $(".episodeList li").eq(episode_count - 1).trigger("click");
    }
  }, 100);
};

RandomFlix();
