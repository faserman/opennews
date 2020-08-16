import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import { Post as PostType } from '../redux/postsReducer';
import { RootState } from '../redux/rootReducer';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector<RootState, PostType[]>(
    state => state.posts.fetchedPosts
  );
  const postList = posts.map((post: any) => <Post post={post} key={post.id} />);

  if (!posts.length) {
    return <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(fetchPosts())} >
        <Text style={styles.text}>
          fetchedPosts
        </Text>
      </TouchableOpacity>
  }

  return (
    <View style={styles.postList}>
      { postList }
    </View>
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

//useEffect()