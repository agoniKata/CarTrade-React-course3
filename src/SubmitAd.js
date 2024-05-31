import React, { useState } from "react";
import axios from "axios";

const SubmitAd = () => {
  const [adData, setAdData] = useState({
    model: "",
    year: "",
    mileage: "",
    price: "",
    phoneNumber: "",
    description: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setAdData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("model", adData.model);
    formData.append("year", adData.year);
    formData.append("mileage", adData.mileage);
    formData.append("price", adData.price);
    formData.append("phoneNumber", adData.phoneNumber);
    formData.append("description", adData.description);
    for (let i = 0; i < adData.images.length; i++) {
      formData.append("images", adData.images[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8082/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h1>Страница подачи объявления</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Модель автомобиля:
          <input
            type="text"
            name="model"
            value={adData.model}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Год выпуска:
          <input
            type="number"
            name="year"
            value={adData.year}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Пробег:
          <input
            type="text"
            name="mileage"
            value={adData.mileage}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Цена:
          <input
            type="text"
            name="price"
            value={adData.price}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Номер телефона:
          <input
            type="tel"
            name="phoneNumber"
            value={adData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Описание:
          <textarea
            name="description"
            value={adData.description}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Фотографии автомобиля:
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </label>

        <button type="submit">Отправить объявление</button>
      </form>
    </div>
  );
};

export default SubmitAd;
