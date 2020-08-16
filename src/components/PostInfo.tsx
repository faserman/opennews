import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Post } from '../redux/postsReducer';

type Props = { 
  route: any;
  navigation: any; 
};

export default ({ route, navigation }: Props) => {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>ID: {route.params.post.title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  
})