import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import { Post as PostType } from '../redux/postsReducer';
import { RootState } from '../redux/rootReducer';
import { FlatList } from 'react-native-gesture-handler';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector<RootState, PostType[]>(
    state => state.posts.fetchedPosts
  );
  const isLoaded = useSelector<RootState, boolean>(
    state => state.posts.isLoaded
  );

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isLoaded]);

  return (
    <FlatList
      style={styles.postList}
      keyExtractor={post => post.id.toString()}
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
    />
  )
}

const styles = StyleSheet.create({
 postList: {
  height: '79%',
 },
 button: {
  alignItems: 'center',
  backgroundColor: '#519ABA',
  padding: 15,
  marginTop: 3,
  borderRadius: 4,
 },
 text: {
  color: '#FFFFFF',
  fontSize: 17,
 }
})

