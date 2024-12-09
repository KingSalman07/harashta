import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonButton,
} from '@ionic/react';
import './Packages.css';

const Packages: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Travel Packages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/k.jpg" alt="Hajj Package" />
            </IonThumbnail>
            <IonLabel>
              <h2>Premium Hajj Package</h2>
              <h3>30 Days</h3>
              <p>Complete package with 5-star accommodation</p>
            </IonLabel>
            <IonButton fill="outline" slot="end">Details</IonButton>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img src="/m.jpg" alt="Umrah Package" />
            </IonThumbnail>
            <IonLabel>
              <h2>Special Umrah Package</h2>
              <h3>15 Days</h3>
              <p>All-inclusive spiritual journey</p>
            </IonLabel>
            <IonButton fill="outline" slot="end">Details</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Packages;