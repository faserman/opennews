import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts)
  const postList = posts.map((post: any) => <Post post={post} key={post.id} />)

  if (!posts.length) {
    return <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(fetchPosts)} >
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

 },
 button: {

 },
 text: {

 }
})