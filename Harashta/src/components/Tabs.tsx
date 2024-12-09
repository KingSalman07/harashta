import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { home, airplane, calendar, person } from 'ionicons/icons';

import Home from '../pages/Home';
import Packages from '../pages/Packages';
import Schedule from '../pages/Schedule';
import Profile from '../pages/Profile';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/app/home" component={Home} />
        <Route exact path="/app/packages" component={Packages} />
        <Route exact path="/app/schedule" component={Schedule} />
        <Route exact path="/app/profile" component={Profile} />
        <Route exact path="/app">
          <Redirect to="/app/home" />
        </Route>
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom" className="custom-tab-bar">
        <IonTabButton tab="home" href="/app/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="packages" href="/app/packages">
          <IonIcon icon={airplane} />
          <IonLabel>Packages</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="schedule" href="/app/schedule">
          <IonIcon icon={calendar} />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="profile" href="/app/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;