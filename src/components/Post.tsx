import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Post } from '../redux/postsReducer';

type Props = {
  post: Post;
}

export default ({ post }: Props) => {
  return (
    <Link 
      to={ `/${post.id}` }
      style={styles.result}
    >
      <Text style={styles.textResult}>{ post.title }</Text>
    </Link>
  )
}

const styles = StyleSheet.create({
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#49B8EC',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#333333'
  },
  textResult: {
    color: '#fff',
    fontSize: 17,
  }
})