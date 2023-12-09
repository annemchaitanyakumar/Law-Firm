import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './swiper.css';

export default () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
      </Swiper>

      
    </div>
  );
};
