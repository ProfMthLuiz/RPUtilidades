// Imports Swiper
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// CSS
import styles from '../components/Slider.module.css'

const Slider = () => {
  const data = [
    {
      id: '1',
      image: require('../assets/banners/banner_rputilidades01.png').default,
    },
    {
      id: '2',
      image:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    },
    {
      id: '3',
      image:
        'https://anselmohoffmann.com.br/wp-content/uploads/2021/05/como-usar-a-cor-na-fotografia-de-paisagem-1.jpg',
    },
    {
      id: '4',
      image:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    },
  ]

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        autoplay={{ delay: 1000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slider" className={styles.slide_item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
