import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './src/redux/rootReducer';
import { sagaWatcher } from './src/redux/sagas';
import PostInfo from './src/components/PostInfo';
import PostList from './src/components/PostList';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, saga
  )
));

saga.run(sagaWatcher);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store= { store } >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="PostList" 
            component={PostList} 
          />
          <Stack.Screen 
            name="PostInfo" 
            component={PostInfo} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
