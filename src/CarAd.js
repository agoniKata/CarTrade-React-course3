import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function CarAd({ ad }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="ad">
      <div className="ad-content">
        <div className="ad-info">
          <a href="https://toyota-almaty.kz/ru/buy-a-toyota/special-offers/offer/?offrId=5702">
            <h2>{`Продажа автомобиля ${ad.model}`}</h2>
          </a>
          <p>{`Год выпуска: ${ad.year}`}</p>
          <p>{`Пробег: ${ad.mileage}`}</p>
          <p>{`Цена: ${ad.price}`}</p>
          <p>{`Номер телефона: ${ad.phoneNumber}`}</p>
        </div>
        <div className="ad-image">
          <div className="slider-container">
            <div
              className={`slider-slide ${currentSlide === 0 ? "active" : ""}`}
            >
              <img
                src={"http://localhost:8082/uploads/" + ad.images}
                alt="Изображение"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ad-details" style={{ display: "none" }}>
        <p>{`Описание: ${ad.description}`}</p>
        <p>{`Контактная информация: Телефон: ${ad.phoneNumber}, Email: example@email.com`}</p>
      </div>
    </div>
  );
}

export default CarAd;
