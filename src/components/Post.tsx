import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../redux/postsReducer';

type Props = {
  post: Post;
}

export default ({ post }: Props) => {

  const navigation = useNavigation();
  const {
    title,
    poster_path,
    vote_average,
    release_date,
  } = post;
  const imgUrl = `http://image.tmdb.org/t/p/w185${poster_path}`

  return (
    <TouchableOpacity 
      style={styles.result}
      onPress={ () => {
        navigation.navigate('PostInfo', { post: post });
      }}
    >
      <Image
        style={styles.poster}
        source={{
          uri: imgUrl
        }}
      />
      <View style={styles.shortDescription}>
        <Text style={styles.textResult}>{ title }</Text>
        <Text style={styles.textResult}>Vote average: { vote_average }</Text>
        <Text style={styles.textResult}>Release date: { release_date }</Text>
      </View>
    </TouchableOpacity>
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
  },
  poster: {
    width: 75,
    height: 120,
  },
  shortDescription: {
    flexDirection: 'column',
    paddingLeft: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
  }
})