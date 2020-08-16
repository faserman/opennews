import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './src/redux/rootReducer';
import { sagaWatcher } from './src/redux/sagas';
import { NativeRouter, Route, Link, RouteComponentProps } from 'react-router-native';
import PostInfo from './src/components/PostInfo';
import PostList from './src/components/PostList';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, saga
  )
));

saga.run(sagaWatcher);

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <PostList />
        </View>

        <Route exact path='/' component={PostList} />
        <Route path='/:id' component={PostInfo} />
      </NativeRouter>
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
