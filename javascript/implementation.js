var RandomFlix = new function()
{
  //Main
  this.main = function()
  {
    console.log("main()");
    
    //Load JQuery
    /*var jquery = document.createElement("RandomFlix_jquery");
    jquery.type = "text/javascript";
    jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";*/
  
    document.getElementsByTagName("head")[0].appendChild(jquery);
    
    // Check Show Type
    if (jQuery(".seasons").length > 0)
    {
      original_show();
    }
    else
    {
      normal_show();
    }
  }
  
  //Logic
  function original_show()
  {
    console.log("original_show()");
    
    var episode_count = jQuery(".episode").length;
    var episode_number = random(1, episode_count);
    
    console.log("Total Number of Episodes: " + episode_count);
    console.log("Episode Chosen: " + episode_number);
    
    window.location.href = jQuery(".episodes li").eq(episode_number - 1).find(".playButton").attr("href");
  }
  
  function normal_show()
  {
    console.log("normal_show()");
    
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
    }, 10);
  }
  
  //Helpers
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
  
  //Variables
  var original_season_id;
};

RandomFlix.main();
