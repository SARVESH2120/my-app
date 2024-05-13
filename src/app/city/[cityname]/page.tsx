"use client";
import { Sheet, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

const CityWeather = ({ params }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    console.log("data");
    fetchWeather();
    if (params.cityName) {
      fetchWeather();
    }
  }, [params.cityName]);

  const APIKEY = `1b75da32503f4186f8a3a1de12d16241`;
  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityname}&appid=${APIKEY}`;

  const fetchWeather = async () => {
    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    // console.log(data);
  };

  return (
    <Sheet
      sx={{
        maxWidth: 300,
        mx: "auto",
        my: "auto",
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "sm",
        boxShadow: "md",
        alignSelf: "center",
        backgroundColor: "ThreeDShadow",
      }}
    >
      {weatherData && (
        <>
          <Typography color="neutral" level="h2" variant="solid">
            Weather in {weatherData?.name}
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Temperature: {weatherData?.main?.temp}
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Feels_like: {weatherData?.main?.feels_like}
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Temp_min: {weatherData?.main?.temp_min}
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Temp_max: {weatherData?.main?.temp_max}
          </Typography>

          <Typography color="primary" level="title-lg" variant="soft">
            Humidity: {weatherData?.main?.humidity}
          </Typography>

          <Typography color="primary" level="title-lg" variant="soft">
            Sunrise: {weatherData?.sys?.sunrise}
          </Typography>

          {/* <Image src={`/images/${params.cityName}.jpg`} alt={`${params.cityName} Image`} width={200} height={200} /> */}
        </>
      )}
    </Sheet>
  );
};

export default CityWeather;
