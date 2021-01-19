import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import optionsIcon from '../../assets/options.png';
import likeIcon from '../../assets/like.png';
import commentIcon from '../../assets/comment.png';
import sendIcon from '../../assets/send.png';
import saveIcon from '../../assets/save.png';

export default function () {
  const posts = [
    {
      id: '1',
      author: 'parreirafred',
      picture_url:
        'https://static.wikia.nocookie.net/batman/images/b/b5/Arthur_Fleck.png/revision/latest?cb=20200822120547',
      likes: 1272,
      description: 'Novo filme do Joker 2019',
      hashtags: '#joker #cinema',
      place: 'Cinema do Shopping',
    },
    {
      id: '2',
      author: 'gabriele.pages',
      picture_url:
        'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
      likes: 1522,
      description: 'Novo filme do Sonic 2019',
      hashtags: '#sonic #cinema',
      place: 'Cinema do Shopping',
    },
    {
      id: '3',
      author: 'levir.dev',
      picture_url: 'https://pbs.twimg.com/media/Enr4Z3AWEAIwOmF?format=jpg',
      likes: 728,
      description: 'Novo filme da Mulher Maravilha 2020',
      hashtags: '#ww #cinema',
      place: 'Cinema do Shopping',
    },
  ];

  function renderItem({item: post}) {
    return (
      <View style={styles.postContent}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={optionsIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image style={styles.postPicture} source={{uri: post.picture_url}} />
        </View>

        <View style={styles.postFooter}>
          <View style={styles.actions}>
            <View style={styles.iconsOptions}>
              <TouchableOpacity style={styles.action}>
                <Image source={likeIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={commentIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={sendIcon} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={saveIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.postLikes}>{post.likes} likes</Text>
            <Text style={styles.postHashtags}>{post.hashtags}</Text>
            <Text style={styles.postDescription}>{post.description}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: '#FFF'}}>
      <SafeAreaView>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  postContent: {
    marginTop: 10,
    marginBottom: 50,
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 10,
  },

  userInfo: {
    //
  },

  postOptions: {
    //
  },

  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },

  place: {
    fontSize: 12,
    color: '#666',
  },

  postPicture: {
    width: '100%',
    height: 400,
  },

  iconsOptions: {
    flexDirection: 'row',
  },

  postFooter: {
    paddingHorizontal: 10,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
  },

  action: {
    marginRight: 5,
  },

  postLikes: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  postHashtags: {
    color: '#002d5e',
  },

  postDescription: {
    color: '#000',
    lineHeight: 18,
  },

  postComments: {},
});
