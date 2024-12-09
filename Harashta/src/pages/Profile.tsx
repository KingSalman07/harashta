import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonIcon,
} from '@ionic/react';
import { personCircle, settings, notifications, helpCircle } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="profile-header">
          <IonAvatar>
            <img src="https://gravatar.com/avatar?d=mp" alt="Profile" />
          </IonAvatar>
          <h2>User Name</h2>
          <p>user@example.com</p>
        </div>

        <IonList>
          <IonItem>
            <IonIcon icon={personCircle} slot="start" />
            <IonLabel>Edit Profile</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={notifications} slot="start" />
            <IonLabel>Notifications</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={settings} slot="start" />
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={helpCircle} slot="start" />
            <IonLabel>Help & Support</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;