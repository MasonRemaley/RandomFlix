//what if implementation.js loads BEFORE jquery? won't this script then FAIL?

/*var season_count = $("#seasonsNav li").length;
alert("Seasons: " + season_count + " click last");

$("#seasonsNav li").eq(season_count - 1).click(function()
{
  alert("Clicked");
});

//$.when(
  $("#seasonsNav li").eq(season_count - 1).trigger("click");
//).done(function()
//{
  alert("Done clicking without 'when'");
//});*/

$( document ).ajaxComplete(function() {
  alert("Ajax complete!");
});
