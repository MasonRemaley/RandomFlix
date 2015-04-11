//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

function RandomFlix()
{
  var original_season_id;
  
  function random(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function current_season_id()
  {
    return $(".episodeList li").eq(0).attr("data-episodeid");
  }
  
  function choose_season()
  {
    var season_count = $("#seasonsNav li").length;
    var season_number = random(0, season_count);
    original_season_id = current_season_id();
    $("#seasonsNav li").eq(season_number - 1).trigger("click");
  }
  
  function do_stuff()
  {
    //Wait until the season updates
    timer = setInterval(function()
    {
      if (current_season_id() != original_season_id)
      {
        clearInterval(timer);
        
        //Click on the last episode
        var episode_count = $(".episodeList li").length;
        episode = $(".episodeList li").eq(0);
        $(".episodeList li").eq(episode_count - 1).trigger("click");
      }
    }, 100);
  }
  
  choose_season();
  do_stuff();
};

RandomFlix();
