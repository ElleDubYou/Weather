   $(document).ready(function(){
var API_KEY = "aa2b2df3814a229b188169de02633291";
var cel = false ;
var wd;

function display(f, c){
    if (c) return  Math.round((f - 32) * (5/9)) + '°';
         return  Math.round(f) + '°';
   };
function render(wd, cel){
  var currentLocation = wd. name;
  var currentWeather = wd.weather[0].description;
  var currentTemperature = display(wd.main.temp, cel);
  var high = display(wd.main.temp_max, cel);
  var low = display(wd.main.temp_min, cel);
  var icon =wd.weather[0].icon;
var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

  $('#location').html(currentLocation + " Weather");
  $('#temp').html(currentTemperature);
  $('#conditions').html(currentWeather);
  $('#highLow').html('High  ' + high +  '  /  Low  ' +low);
  $('#icon').html('<img src = ' + iconUrl +  '>');
};

  var loc;



$.getJSON('https://ipinfo.io', function(d){
  loc = d.loc.split(",");
  console.log(loc);

$.getJSON('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat='+ loc[0] + '&lon=' + loc[1] +'&APPID=' +API_KEY , function(apiData){
wd = apiData;

render(apiData, cel);

$('#toggle').click(function(){
  cel = !cel;
  render(wd, cel);
});
});

});
});
