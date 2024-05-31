import React, { useState, useEffect } from "react";
import axios from "axios"; // Импортируем Axios

import CarAd from "./CarAd";

const asik = "1716299383834-A2.png";

function Ads() {
  const [dataCars, setDataCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/cars/all");
        setDataCars(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1adds">Объявления</h1>
      </header>
      <main>
        {dataCars.map((ad, index) => (
          <CarAd key={index} ad={ad} />
        ))}
      </main>
    </div>
  );
}

export default Ads;
