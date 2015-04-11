//Sometimes you have to click multiple times, maybe jquery doesn't get loaded in time?

var RandomFlix = new function()
{
  var original_season_id;
  
  function random(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function current_season_id()
  {
    return parseInt(jQuery(".episodeList li").eq(0).attr("data-episodeid"));
  }
  
  this.main = function()
  {
    console.log("main()");
    
    original_season_id = current_season_id();
    console.log("Original season id: " + original_season_id);
    var original_season_number = jQuery("#selectorButton .selectorTxt").html().split(" ").pop();
    var season_count = jQuery("#seasonsNav li").length;
    var new_season_number = random(1, season_count);
    jQuery("#seasonsNav li").eq(new_season_number - 1).trigger("click"); //new_season_number - 1
    
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
    
    var episode_count = jQuery(".episodeList li").length;
    jQuery(".episodeList li").eq(random(1, episode_count) - 1).trigger("click");
  }
  
  function choose_episode_after_update()
  {
    console.log("choose_episode_after_update()");
    
    timer = setInterval(function()
    {
      console.log(current_season_id() + " vs " + original_season_id);
      
      if (current_season_id() != original_season_id)
      {
        console.log("Done waiting");
        clearInterval(timer);
        choose_episode();
      }
    }, 100);
  }
};

alert("Test version");
RandomFlix.main();
