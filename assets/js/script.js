//VARIABLES
var searchBtn = document.querySelector(".searchBtn");
/* var myKey = "4c4bcf68ece59c4349091a9dded4ab01";
var city = document.getElementsByClassName("userInput");
var requestUrl = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${myKey}`; */

/* function fetchApi() {
  var myKey = "4c4bcf68ece59c4349091a9dded4ab01";
  var city = document.querySelector(".userInput");
  var userInput = city.value;
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${userInput}&appid=${myKey}`;
  fetch(requestUrl)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      localStorage.setItem(userInput, JSON.stringify(data));
      console.log(data);
    });
} */

function fetchApi() {
  var myKey = "4c4bcf68ece59c4349091a9dded4ab01";
  var city = document.querySelector(".userInput");
  var userInput = city.value;
  var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=${myKey}`;
  fetch(requestUrl)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      var citySearched = "";
      localStorage.setItem(citySearched, userInput);
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${myKey}`;
      fetch(oneCallUrl)
        .then(function (response) {
          var oneCallData = response.json();
          return oneCallData;
        })
        .then(function (oneCallData) {
          console.log(oneCallData);
          renderData(oneCallData);
        });
    });
}

function renderData(oneCallData) {
  var citySearch = document.querySelector(".userInput");
  var cityShown = citySearch.value;
  var currentCard = document.querySelector(".currentCard");
  var dayCards = document.querySelector(".dayCards");
  var currentCity = document.getElementById("currentCity");
  var currentTemp = document.getElementById("currentTemp");
  var currentWind = document.getElementById("currentWind");
  var currentHumidity = document.getElementById("currentHumidity");
  var currentUVI = document.getElementById("currentUVI");
  var day1Date = document.getElementById("5Date1");
  var day1Temp = document.getElementById("5Temp1");
  var day1Wind = document.getElementById("5Wind1");
  var day1Humidity = document.getElementById("5Humidity1");
  var day2Date = document.getElementById("5Date2");
  var day2Temp = document.getElementById("5Temp2");
  var day2Wind = document.getElementById("5Wind2");
  var day2Humidity = document.getElementById("5Humidity2");
  var day3Date = document.getElementById("5Date3");
  var day3Temp = document.getElementById("5Temp3");
  var day3Wind = document.getElementById("5Wind3");
  var day3Humidity = document.getElementById("5Humidity3");
  var day4Date = document.getElementById("5Date4");
  var day4Temp = document.getElementById("5Temp4");
  var day4Wind = document.getElementById("5Wind4");
  var day4Humidity = document.getElementById("5Humidity4");
  var day5Date = document.getElementById("5Date5");
  var day5Temp = document.getElementById("5Temp5");
  var day5Wind = document.getElementById("5Wind5");
  var day5Humidity = document.getElementById("5Humidity5");
  //Moment Variables
  var now = moment().format("MM/DD/YYYY");
  var day1 = moment.unix(oneCallData.daily[1].dt).format("MM/DD/YYYY");
  var day2 = moment.unix(oneCallData.daily[2].dt).format("MM/DD/YYYY");
  var day3 = moment.unix(oneCallData.daily[3].dt).format("MM/DD/YYYY");
  var day4 = moment.unix(oneCallData.daily[4].dt).format("MM/DD/YYYY");
  var day5 = moment.unix(oneCallData.daily[5].dt).format("MM/DD/YYYY");

  //Display info for current day
  currentCity.textContent = `${cityShown} ${now}`;
  currentTemp.textContent = `Temp: ${oneCallData.current.temp}°F `;
  currentWind.textContent = `Wind: ${oneCallData.current.wind_speed} MPH`;
  currentHumidity.textContent = `Humidity: ${oneCallData.current.humidity}%`;
  currentUVI.textContent = `UV Index: ${oneCallData.current.uvi}`;
  //Display dates for dayCards
  day1Date.textContent = day1;
  day2Date.textContent = day2;
  day3Date.textContent = day3;
  day4Date.textContent = day4;
  day5Date.textContent = day5;
  //Display info on 5day chart
  day1Temp.textContent = `Temp: ${oneCallData.daily[1].temp.day}°F `;
  day1Wind.textContent = `Wind: ${oneCallData.daily[1].wind_speed} MPH`;
  day1Humidity.textContent = `Humidity: ${oneCallData.daily[1].humidity}%`;
  day2Temp.textContent = `Temp: ${oneCallData.daily[2].temp.day}°F `;
  day2Wind.textContent = `Wind: ${oneCallData.daily[2].wind_speed} MPH`;
  day2Humidity.textContent = `Humidity: ${oneCallData.daily[2].humidity}%`;
  day3Temp.textContent = `Temp: ${oneCallData.daily[3].temp.day}°F `;
  day3Wind.textContent = `Wind: ${oneCallData.daily[3].wind_speed} MPH`;
  day3Humidity.textContent = `Humidity: ${oneCallData.daily[3].humidity}%`;
  day4Temp.textContent = `Temp: ${oneCallData.daily[4].temp.day}°F `;
  day4Wind.textContent = `Wind: ${oneCallData.daily[4].wind_speed} MPH`;
  day4Humidity.textContent = `Humidity: ${oneCallData.daily[4].humidity}%`;
  day5Temp.textContent = `Temp: ${oneCallData.daily[5].temp.day}°F `;
  day5Wind.textContent = `Wind: ${oneCallData.daily[5].wind_speed} MPH`;
  day5Humidity.textContent = `Humidity: ${oneCallData.daily[5].humidity}%`;
}

/* function getLocal() {
  var retrieve = localStorage.getItem(userInput);
  if (retrieve === null) {
    return [];
  }
  return JSON.parse(retrieve);
} */

//EVENT LISTENERS

document
  .querySelector(".searchBtn")
  .addEventListener("click", function (event) {
    var hide = document.getElementById("hide");
    hide.classList.remove("hide");

    /*     var citySearch = city.value;
    var previousSearches = getLocal();
    previousSearches.push(citySearch);
    localStorage.setItem("Cities-Searched", JSON.stringify(previousSearches));
    fetchApi(requestUrl); */
    fetchApi();
  });
