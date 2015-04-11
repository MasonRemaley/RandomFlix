//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

var season_count = $("#seasonsNav li").length;
//alert("Seasons: " + season_count + " click last");

var season = $("#seasonsNav li").eq(season_count - 1);
var loading = $(".ajaxLoading");
//alert(season.hasClass("selected"));
alert(loading.css("display") == "none");
season.trigger("click");
alert(loading.css("display") == "none");
//alert(season.hasClass("selected"));

//var episode_count = $(".episodeList li").length;
//alert("Episodes: " + episode_count);
