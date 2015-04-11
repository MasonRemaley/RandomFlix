//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

var RandomFlix = new function()
{
  var original_season_id;
  
  function random(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function current_season_id()
  {
    return parseInt($(".episodeList li").eq(0).attr("data-episodeid"));
  }
  
  this.main = function()
  {
    console.log("main()");
    
    original_season_id = current_season_id();
    console.log("Original season id: " + original_season_id);
    var original_season_number = $("#selectorButton .selectorTxt").html();
    var season_count = $("#seasonsNav li").length;
    var new_season_number = random(1, season_count);
    $("#seasonsNav li").eq(new_season_number - 1).trigger("click"); //new_season_number - 1
    
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
    $(".episodeList li").eq(random(1, episode_count) - 1).trigger("click");
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

RandomFlix.main();
