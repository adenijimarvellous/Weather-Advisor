const apiKey = "831661c78581d14b7fe4af70cc05f5f2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");
const loading = document.getElementById("loading");

async function checkWeather(city) {
  if (!city) return; // Prevent empty searches

  // Show loader
  loading.classList.remove("hidden");

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    //  Hide loader after response
    loading.classList.add("hidden");

    //  Handle invalid city
    if (response.status === 404 || !data.name) {
      document.getElementById("city").innerText = "City not found";
      document.getElementById("temp").innerText = "--°C";
      document.getElementById("weatherCondition").innerText = "";
      document.getElementById("humidity").innerText = "--%";
      document.getElementById("wind").innerText = "--km/h";
      document.getElementById("advice-text").innerText = "⚠️ Please enter a valid city name.";
      weatherIcon.src = "assets/fog.svg";
      return;
    }

    //  Display weather info
    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("weatherCondition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";

    const weatherCondition = data.weather[0].main.toLowerCase();
    const temperature = data.main.temp;
    let isCold = temperature < 10;

    // Weather icons
    if (isCold) {
      weatherIcon.src = "assets/snow.svg";
    } else if (weatherCondition.includes("cloud")) {
      weatherIcon.src = "assets/cloudy.svg";
    } else if (weatherCondition.includes("rain")) {
      weatherIcon.src = "assets/rain.svg";
    } else if (weatherCondition.includes("drizzle")) {
      weatherIcon.src = "assets/drizzle.svg";
    } else if (weatherCondition.includes("thunder")) {
      weatherIcon.src = "assets/thunderstorm.svg";
    } else if (weatherCondition.includes("snow")) {
      weatherIcon.src = "assets/snow.svg";
    } else if (
      weatherCondition.includes("fog") ||
      weatherCondition.includes("mist") ||
      weatherCondition.includes("haze")
    ) {
      weatherIcon.src = "assets/fog.svg";
    } else if (weatherCondition.includes("clear")) {
      weatherIcon.src = "assets/sunset.svg";
    } else {
      weatherIcon.src = "assets/partly-cloud-day.svg";
    }

    // Smart advice
    let advice = "";
    if (isCold) {
      advice = "🧥 It's quite cold — wear something warm!";
    } else if (weatherCondition.includes("rain") || weatherCondition.includes("drizzle")) {
      advice = "☔ Take an umbrella with you!";
    } else if (weatherCondition.includes("snow")) {
      advice = "❄️ Dress warmly, it’s snowing!";
    } else if (weatherCondition.includes("clear")) {
      advice = "☀️ Great weather for a walk or outdoor fun!";
    } else if (weatherCondition.includes("cloud")) {
      advice = "⛅ Slightly cloudy, enjoy your day.";
    } else if (weatherCondition.includes("thunder")) {
      advice = "⚡ Stay indoors, thunderstorm alert!";
    } else if (
      weatherCondition.includes("fog") ||
      weatherCondition.includes("mist") ||
      weatherCondition.includes("haze")
    ) {
      advice = "🌫️ Drive carefully — it’s foggy.";
    } else {
      advice = "🌈 Have a beautiful day!";
    }

    document.getElementById("advice-text").innerText = advice;

    // Dynamic background
    const body = document.body;
    function updateBackground(condition) {
      if (isCold) {
        body.style.background = "linear-gradient(135deg, #83a4d4, #b6fbff)";
      } else if (condition.includes("clear")) {
        body.style.background = "linear-gradient(135deg, #f9d423, #ff4e50)";
      } else if (condition.includes("cloud")) {
        body.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)";
      } else if (condition.includes("rain")) {
        body.style.background = "linear-gradient(135deg, #667db6, #0082c8, #667db6)";
      } else if (condition.includes("snow")) {
        body.style.background = "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
      } else if (condition.includes("mist") || condition.includes("haze")) {
        body.style.background = "linear-gradient(135deg, #3e5151, #decba4)";
      } else if (condition.includes("thunder")) {
        body.style.background = "linear-gradient(135deg, #141E30, #243B55)";
      } else {
        body.style.background = "linear-gradient(135deg, #74ABE2, #5563DE)";
      }
      body.style.transition = "background 1s ease";
    }

    updateBackground(weatherCondition);

  } catch (error) {
    // Catch network or API errors
    loading.classList.add("hidden");
    const adviceText = document.getElementById("advice-text");
    adviceText.innerText = "Something went wrong. Please check your internet and try again.";
    adviceText.style.color = "red";
  }
}

// Trigger search on button click
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});

// --- Allow Enter key ---
searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
