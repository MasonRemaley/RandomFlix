//Sometimes you have to click multiple times, maybe jquery doesn't get loaded in time?
//Use smaller delay in loop if that hmakes it faster
//if it goes to a new season on the first try on originals it doesn't work

var RandomFlix = new function()
{
  var original_season_id;
  
  function random(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function current_season_id()
  {
    var episode_1 = jQuery(".episodeList li, .episodes li").eq(0);
    
    if (episode_1.attr("data-episodeid"))
    {
      return parseInt(episode_1.attr("data-episodeid"));
    }
    else
    {
      return parseInt(episode_1.attr("data-videoid"));
    }
  }
  
  function normal_show()
  {
    original_season_id = current_season_id();
    console.log("Original season id: " + original_season_id);
    var original_season_number = jQuery("#selectorButton .selectorTxt, .seasonSelector .option-selected a span").html();
    var season_count = jQuery("#seasonsNav li, .seasonSelector li").length;
    console.log("Season count: " + season_count);
    var new_season_number = random(1, season_count);
    
    //Normal click
    jQuery("#seasonsNav li").eq(new_season_number - 1).trigger("click");
    
    //Original click
    jQuery(".seasonSelector li").eq(new_season_number - 1).find("a").trigger("click");
    
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
    
    var episode_count = jQuery(".episodeList li, .episodes li").length;
    var random_episode_number = random(1, episode_count);
    console.log("Choose number " + random_episode_number);
    
    //Click for normal shows
    jQuery(".episodeList li").eq(random_episode_number - 1).trigger("click");
    
    //Click for Netflix originals
    if (jQuery(".episodes li").length > 0)
    {
      window.location.href = jQuery(".episodes li").eq(random_episode_number - 1).find(".playButton").attr("href");
    }
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
  
  this.main = function()
  {
    console.log("main()");
    
    if (jQuery(".seasons").length > 0)
    {
      alert("Original show");
    }
    else
    {
      normal_show();
    }
  }
};

RandomFlix.main();
