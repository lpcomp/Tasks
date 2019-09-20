
/*  obs: para fazer o drawerNavigator funcionar corretamente era necessário aplicar as seguintes correções no arquivo MainActivity.java no Android:
    
    import com.facebook.react.ReactActivity;
    + import com.facebook.react.ReactActivityDelegate;
    + import com.facebook.react.ReactRootView;
    + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

    public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "Example";
    }

    +  @Override
    +  protected ReactActivityDelegate createReactActivityDelegate() {
    +    return new ReactActivityDelegate(this, getMainComponentName()) {
    +      @Override
    +      protected ReactRootView createRootView() {
    +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
    +      }
    +    };
    +  }
    }

    Para funcionar o slide do drawer!
*/
import React from 'react' // se for usar jsx precisa disso!
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'
import Menu from './screens/Menu'
import AuthOrApp from './screens/AuthOrApp'

const MenuRoutes = {
  Today: {
      name: 'Today',
      screen: props => <Agenda title='Hoje' daysAhead={0} {...props} />,
      navigationOptions: {
          title: 'Hoje'
      }
  },
  Tomorrow: {
      name: 'Tomorrow',
      screen: props =>
          <Agenda title='Amanhã' daysAhead={1} {...props} />,
      navigationOptions: {
          title: 'Amanhã'
      }
  },
  Week: {
      name: 'Week',
      screen: props => 
          <Agenda title='Semana' daysAhead={7} {...props} />,
      navigationOptions: {
          title: 'Semana'
      }
  },
  Month: {
      name: 'Month',
      screen: props => 
          <Agenda title='Mês' daysAhead={30} {...props} />,
      navigationOptions: {
          title: 'Mês'
      }
  }
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)


const AppStack = createStackNavigator({ Home: MenuNavigator }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

const AuthStack = createStackNavigator({ SignIn: Auth }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

export default createAppContainer(
    createSwitchNavigator(
        {        
            Loading: {
                screen: AuthOrApp,
            },
            App: {
				screen: AppStack,
			},	
            Auth: {
				screen: AuthStack,
			},	
        },
        {
            initialRouteName: 'Loading',        
        }
    )
);