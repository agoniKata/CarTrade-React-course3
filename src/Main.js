// Main.js
import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const carImages = [
    'https://cdn.wheel-size.com/automobile/body/xpeng-p7-2020-2024-1691294867.725611.jpg',
    'https://thumb.tildacdn.com/tild6363-6664-4938-b862-353263303631/-/resize/544x/-/format/webp/3-QpoVYNFbg-transfor.png',
    'https://cdn.euroncap.com/media/72825/nio-et7.png',
  ];

  const carInfo = [
    {
      model: 'Xpeng P7',
      description: 'Дебют Xpeng P7 состоялся весной 2020 года. На момент выхода модель считалась флагманской, потому что явно выделялась среди конкурентов и технической начинкой, и оснащением салона.',
    },
    {
      model: 'Zeekr 001',
      description: 'Наш топ лучших китайских электромобилей 2023 открывает Zeekr 001. Новый бренд был запущен автоконцерном Geely для продвижения электрического транспорта премиум-класса. Модель 001 является первенцем в линейке стильных спортивных электровседорожников. Первая машина сошла с конвейера в октябре 2021 года, а летом 2023 Zeekr 001 стал лидером продаж в России.',
    },
    {
      model: 'Nio ET7',
      description: 'Первый Nio ET7 сошел с конвейера в 2020 году. Его основной «фишкой» является сменная батарея, которую можно не заряжать, а поменять на станции Nio Power на уже заряженную. Процесс замены не длится дольше пяти минут, но есть сложность — такие станции пока что находятся только в Китае.',
    },
  ];

  const additionalCarImages = [
    'https://zeekr-configurator.kz/userdata/section/section_11/image_27/1698438833_731427781_b.png',
    'https://zeekr-configurator.kz/userdata/section/section_11/image_26/1698438828_1309878002_b.png',
  ];

  const additionalCarInfo = [
    {
      model: 'Zeekr 001',
      description: 'Дальность хода: 590 км, 0-100 км/ч: 3.8c, Макс. Мощность: 400 кВт',
    },
    {
      model: 'Zeekr 001',
      description: 'Дальность хода: 590 км, 0-100 км/ч: 3.8c, Макс. Мощность: 400 кВт',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="slider-arrow prev">Previous</button>,
    nextArrow: <button className="slider-arrow next">Next</button>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  let slider; 
  let additionalSlider; 

  useEffect(() => {
    const mainSliderInterval = setInterval(() => {
      if (!showAdditionalContent) {
        slider.slickNext();
      }
    }, 3000);

    return () => clearInterval(mainSliderInterval);
  }, [showAdditionalContent]);

  const handleFormSubmit = () => {
    window.location.href = 'https://zeekr-configurator.kz/ru/models/zeekr-001/#step-1';
  };

  return (
    <main>
      <div className="elect">
        
      </div>

      <Slider {...settings} ref={(c) => (slider = c)}>
        {carImages.map((imageUrl, index) => (
          <div className="slin" key={index}>
            <img className="imgslaid" src={imageUrl} alt={`Электромобиль ${index + 1}`} />
            <div className="slaidertext">
              <h3>{carInfo[index].model}</h3>
              <p>{carInfo[index].description}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Модель</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {carInfo.map((car, index) => (
              <tr key={index}>
                <td>{car.model}</td>
                <td>{car.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdditionalContent && (
        <div className="additional-slider">
          <Slider {...settings} ref={(c) => (additionalSlider = c)}>
            {additionalCarImages.map((imageUrl, index) => (
              <div className="slin" key={index}>
                <img className="imgslaid" src={imageUrl} alt={`Электромобиль ${index + 1}`} />
                <div className="slaidertext">
                  <h3>{additionalCarInfo[index].model}</h3>
                  <p>{additionalCarInfo[index].description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      <div className="additional-content">
        <h2>Вы можете приобрести эти автомобили у нас с выгодой. Если интересно, жмите на кнопку</h2>
        <button className="toggle-button" onClick={toggleAdditionalContent}>
          {showAdditionalContent ? 'Hide Details' : 'Show Details'}
        </button>
        {showAdditionalContent && (
          <>
            <hr />
            <h4>
              1) Выбор подходящего авто <br />
              Выберите понравившуюся модель, комплектацию и цвет авто
              <hr />
            </h4>
            <h4>
              2) Онлайн-оплата или автокредит <br />
              Безопасный процесс полной оплаты и оформления онлайн-кредита
              <hr />
            </h4>
            <h4>
              3) Оформление документов <br />
              Прозрачный процесс оформления полного пакета документов за вас
              <hr />
            </h4>
            {/* Добавление формы */}
            <form>
              <label htmlFor="firstName">Имя:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />

              <label htmlFor="lastName">Фамилия:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />

              <label htmlFor="birthDate">Дата рождения:</label>
              <input type="text" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />

              <label htmlFor="phoneNumber">Номер телефона:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />

              <label htmlFor="emailAddress">Электронный адрес:</label>
              <input type="text" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
              <a href='https://zeekr-configurator.kz/ru/models/zeekr-001/#step-1'>
              <button type="submit" className="submit-button" onClick={(e) => e.preventDefault()}>
                Отправить
              </button>
              </a>
            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
