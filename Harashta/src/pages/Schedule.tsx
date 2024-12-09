import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
} from '@ionic/react';
import './Schedule.css';

const Schedule: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Travel Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Hajj 2024</h2>
              <p>Departure: June 15, 2024</p>
            </IonLabel>
            <IonBadge color="success" slot="end">Available</IonBadge>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h2>Umrah Ramadan</h2>
              <p>Departure: March 10, 2024</p>
            </IonLabel>
            <IonBadge color="warning" slot="end">Limited</IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;