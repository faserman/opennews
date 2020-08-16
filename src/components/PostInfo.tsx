import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Post } from '../redux/postsReducer';

type Props = { 
  match: any 
};

export default ({ match }: Props) => {
  return (
    <Text>ID: {match.params.id}</Text>
  )
}


const styles = StyleSheet.create({
  
})