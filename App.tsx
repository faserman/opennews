import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './src/redux/rootReducer';
import { sagaWatcher } from './src/redux/sagas';
import PostInfo from './src/components/PostInfo';
import PostList from './src/components/PostList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Post } from './src/redux/postsReducer';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, saga
  )
));

saga.run(sagaWatcher);

export type RootStackParamList = {
  PostList: undefined;
  PostInfo: { post: Post };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <Provider store= { store } >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PostList" 
            component={PostList}
            options={{ title: 'Top rated movie' }}
          />
          <Stack.Screen 
            name="PostInfo" 
            component={PostInfo}
            options={{ title: 'Movie info' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

