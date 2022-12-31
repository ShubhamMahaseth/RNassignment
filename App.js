import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import DataList from './src/screen/DataList';
import SuccesScreen from './src/screen/SuccessScreen';
import ErrorScreen from './src/screen/ErrorScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="Data List"
          component={DataList}
          options={{title: 'Data List'}}
        />
        <Stack.Screen
          name="Success"
          component={SuccesScreen}
          options={{title: 'Success'}}
        />
        <Stack.Screen
          name="Error"
          component={ErrorScreen}
          options={{title: 'Error'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
