import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  Button,
  ImageBackground
} from 'react-native';

type Props = { 
  route: any;
  navigation: any; 
};

type PostInfo = {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: string;
  release_date: string;
}

export default ({ route, navigation }: Props) => {

  const post: PostInfo = route.params.post;
  const { 
    title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
  } = post;
  const imgBackgroundUrl = `http://image.tmdb.org/t/p/original${backdrop_path}`;
  const imgUrl = `http://image.tmdb.org/t/p/w185${poster_path}`;

  return (
    <ImageBackground
      source={{ uri: imgBackgroundUrl }}
      style={styles.imageBackground}
    >
      <View style={styles.postInfo}>
        <Text style={styles.text}> {post.title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  postInfo: {
    width: '95%',
    height: '95%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(238, 238, 238, 0.6)'
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {

  }
})