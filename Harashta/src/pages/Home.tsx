import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Harashta Rafi Tour</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="promo-slides"
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a" alt="Mecca" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa" alt="Medina" />
          </SwiperSlide>
        </Swiper>

        <div className="featured-packages">
          <h2>Featured Packages</h2>
          <IonCard>
            <img src="/k.jpg" alt="Hajj Package" />
            <IonCardHeader>
              <IonCardTitle>Premium Hajj Package</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Complete Hajj package including 5-star accommodation, transportation, and guided tours.
            </IonCardContent>
          </IonCard>

          <IonCard>
            <img src="/m.jpg" alt="Umrah Package" />
            <IonCardHeader>
              <IonCardTitle>Special Umrah Package</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              10-day Umrah package with luxury accommodation and spiritual guidance.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;