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
  
  function main()
  {
    console.log("main()");
    
    var original_season_number = $("#selectorButton .selectorTxt").html();
    var season_count = $("#seasonsNav li").length;
    var new_season_number = random(1, season_count);
    $("#seasonsNav li").eq(season_count - 1).trigger("click"); //new_season_number - 1
    
    console.log("Original Season: " + original_season_number);
    console.log("New Season: " + new_season_number);
    
    if (original_season_number == new_season_number)
    {
      choose_episode();
    }
    else
    {
      choose_episode_after_update();
    }
  }
  
  function choose_episode()
  {
    console.log("choose_episode()");
    
    var episode_count = $(".episodeList li").length;
    episode = $(".episodeList li").eq(random(1, episode_count) - 1);
    $(".episodeList li").eq(episode_count - 1).trigger("click");
  }
  
  function choose_episode_after_update()
  {
    console.log("choose_episode_after_update()");
    
    original_season_id = current_season_id();
    
    timer = setInterval(function()
    {
      if (current_season_id() != original_season_id)
      {
        clearInterval(timer);
        choose_episode();
      }
    }, 100);
  }
  
  main();
};

RandomFlix();
