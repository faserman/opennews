import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  ImageBackground
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Post } from '../redux/postsReducer';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'PostInfo'>;

type Props = { 
  route: ProfileScreenRouteProp;
};

export default ({ route }: Props) => {

  const post: Post = route.params.post;
  const { 
    title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    overview,
  } = post;
  const imgBackgroundUrl = `http://image.tmdb.org/t/p/original${backdrop_path}`;
  const imgUrl = `http://image.tmdb.org/t/p/w185${poster_path}`;

  return (
    <ImageBackground
      source={{ uri: imgBackgroundUrl }}
      style={styles.imageBackground}
    >
      <View style={styles.postInfo}>
        <Text style={styles.textTitle}>{title}</Text>
        <Image 
          style={styles.poster}
          source={{ uri: imgUrl }}
        />
        <View style={styles.descText}>
          <Text style={styles.text}>Release date: {release_date}</Text>
          <Text style={styles.text}>Vote average: {vote_average}</Text>
        </View>
        <Text style={styles.text}>Overview:</Text>
        <Text style={styles.textOverview}>{overview}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  postInfo: {
    width: '97%',
    height: '97%',
    flexDirection: "column",
    backgroundColor: 'rgba(238, 238, 238, 0.7)'
  },
  description: {
    flexDirection: "row",
    width: '95%',
    height: 255,
    alignSelf: "flex-start"
  },
  poster: {
    alignSelf: "center",
    width: 185,
    height: 250,
    margin: 5
  },
  descText: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },
  textTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  textOverview: {
    fontSize: 18,
    padding: 2
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 2
  }
})