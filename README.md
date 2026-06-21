# Weather Advisor

A modern, real-time weather application that provides location-based weather information with intelligent advice. Built with vanilla JavaScript and powered by OpenWeatherMap API.

## 📋 Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Temperature Display**: Shows temperature in Celsius with dynamic weather icons
- **Detailed Weather Metrics**:
  - Temperature
  - Weather condition (Sunny, Cloudy, Rainy, etc.)
  - Humidity percentage
  - Wind speed (km/h)
- **Smart Weather Advice**: Context-aware recommendations based on current weather conditions
- **Dynamic Weather Icons**: Weather-appropriate SVG icons that change based on conditions
- **Loading States**: Visual feedback with loading spinner while fetching data
- **Error Handling**: Graceful error messages for invalid city names
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Glassmorphism design with smooth gradient background

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Glassmorphism effects, gradients, animations, and responsive design
- **JavaScript (ES6+)**: Async/await API calls and DOM manipulation
- **OpenWeatherMap API**: Real-time weather data provider
- **Fonts**: Google Fonts (Poppins)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- OpenWeatherMap API key (included in the project)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MarvellousAdeniji/Weather-Advisor.git
```

2. Navigate to the project directory:

```bash
cd Weather-Advisor
```

3. Open `index.html` in your web browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

4. The app will open at `http://localhost:8000` (or the port shown in your terminal)

## 📖 Usage

1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the current weather information for that city
4. Read the smart advice tailored to the weather conditions

## 📁 Project Structure

```
Weather-Advisor/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic and API calls
├── style.css           # Styling and layout
├── assets/             # Image and icon resources
│   ├── weather-icon.png
│   ├── sunset.svg
│   ├── cloudy.svg
│   ├── rain.svg
│   ├── snow.svg
│   └── fog.svg
└── README.md          # Project documentation
```

## 🌐 API Integration

This project uses the **OpenWeatherMap API** (Free tier) to fetch weather data.

- **Base URL**: `https://api.openweathermap.org/data/2.5/weather`
- **Temperature Unit**: Metric (Celsius)
- **Data Returned**: Temperature, humidity, wind speed, weather condition

## 🎨 Design Features

- **Glassmorphism Effect**: Modern frosted glass appearance
- **Gradient Background**: Smooth blue gradient for a weather-themed aesthetic
- **Dynamic Icons**: Weather conditions are represented with appropriate SVG icons
- **Responsive Layout**: Adapts to different screen sizes using CSS Grid and Flexbox
- **Smooth Transitions**: Animated interactions for better user experience

## 🔧 Customization

### Add Your Own API Key

Replace the API key in `script.js`:

```javascript
const apiKey = "your-api-key-here";
```

### Modify Temperature Unit

Change to Fahrenheit in `script.js`:

```javascript
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
```

## ⚠️ Error Handling

- **City Not Found**: Displays "City not found" message with advice to enter a valid city name
- **Network Error**: Shows loading state while fetching data
- **Empty Search**: Prevents empty search queries

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 👤 Author

**Marvellous Adeniji**

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Known Issues

- None currently reported

## 📞 Support

For support, issues, or suggestions, please open an issue on the GitHub repository.

## 🎯 Future Enhancements

- 5-day weather forecast
- Multiple city bookmarks
- Unit toggle (Celsius/Fahrenheit)
- Weather alerts
- Local storage for recent searches
- Dark mode toggle
- Geolocation-based weather

---

**Enjoy checking the weather! ☀️🌧️❄️**
