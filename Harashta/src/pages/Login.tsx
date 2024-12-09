import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { mailOutline, lockClosedOutline, personAddOutline } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Implement Firebase authentication here
    history.push('/app/home');
  };

  const handleRegister = () => {
    // Implement Firebase registration here
    console.log('Register with:', { name, email, password });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Harashta Rafi Tour</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-content">
        <div className="login-container">
          <div className="logo-container">
            <img src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&auto=format&fit=crop&q=60" alt="Logo" className="logo" />
          </div>
          
          <h1>{showRegister ? 'Create Account' : 'Welcome Back'}</h1>
          <p>{showRegister ? 'Register to get started' : 'Sign in to continue'}</p>

          <IonGrid>
            <IonRow>
              <IonCol>
                {showRegister && (
                  <IonItem className="auth-input">
                    <IonIcon icon={personAddOutline} slot="start" />
                    <IonLabel position="floating">Full Name</IonLabel>
                    <IonInput
                      type="text"
                      value={name}
                      placeholder="Enter your full name"
                      onIonChange={e => setName(e.detail.value!)}
                    />
                  </IonItem>
                )}

                <IonItem className="auth-input">
                  <IonIcon icon={mailOutline} slot="start" />
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onIonChange={e => setEmail(e.detail.value!)}
                  />
                </IonItem>

                <IonItem className="auth-input">
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onIonChange={e => setPassword(e.detail.value!)}
                  />
                </IonItem>

                {showRegister && (
                  <IonItem className="auth-input">
                    <IonIcon icon={lockClosedOutline} slot="start" />
                    <IonLabel position="floating">Confirm Password</IonLabel>
                    <IonInput
                      type="password"
                      value={confirmPassword}
                      placeholder="Confirm your password"
                      onIonChange={e => setConfirmPassword(e.detail.value!)}
                    />
                  </IonItem>
                )}

                <IonButton
                  expand="block"
                  className="auth-button"
                  onClick={showRegister ? handleRegister : handleLogin}
                >
                  {showRegister ? 'Register' : 'Login'}
                </IonButton>

                <div className="switch-auth">
                  <IonText color="medium">
                    {showRegister ? 'Already have an account?' : "Don't have an account?"}
                  </IonText>
                  <IonButton
                    fill="clear"
                    onClick={() => setShowRegister(!showRegister)}
                  >
                    {showRegister ? 'Login' : 'Register'}
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;