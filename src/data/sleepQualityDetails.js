const sleepQualityDetails = `Poor sleep is linked to factors people rarely track: room temperature, humidity, air quality, light, and noise. This project is an end-to-end system that records those conditions overnight, pairs them with a simple morning “Did you sleep well?” response, and uses a Random Forest model to identify which environmental factors correlate most strongly with sleep quality. Built as a mentored team project in the healthcare and public health space.

### What I built

- **Sensor hardware:** A Raspberry Pi Pico 2 W programmed in MicroPython, reading a DHT11 (temperature/humidity), BH1750 (light), an analog air quality sensor, and a sound sensor over I2C and ADC. An Arduino was used for initial sensor prototyping before porting to the Pico.
- **Data pipeline:** The Pico logs readings every minute, averages them hourly, and sends them over Wi-Fi to a Flask server, with results saved to a spreadsheet alongside each user’s nightly sleep response.
- **Machine learning:** A Python aggregation script turns hourly readings into one summary row per night, and a scikit-learn \`RandomForestClassifier\` predicts sleep quality and ranks factors by feature importance.
- **Frontend:** A React (Vite) dashboard with a home page for visualizations and ML results, and a data page for browsing raw readings.

### Tech stack

- \`MicroPython\`
- \`Arduino / PlatformIO\`
- \`Raspberry Pi Pico 2 W\`
- \`Python\`
- \`Flask\`
- \`pandas\`
- \`scikit-learn\`

### Impact

Sleep problems are a public health concern, and many people never realize their bedroom may be working against them. This project offers a low-cost alternative to clinical sleep studies: inexpensive off-the-shelf sensors log overnight conditions over Wi-Fi, and a machine learning model identifies which factors (air quality, noise, light, temperature) most affect each user’s sleep. The result is personalized, actionable guidance, like improving ventilation or reducing light, with only one question to answer each morning.
`;

export default sleepQualityDetails;
