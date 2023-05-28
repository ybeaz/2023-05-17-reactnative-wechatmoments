import React, {Component} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Header} from '../../Header/ui/Header';
import {TweetList} from '../../TweetList/ui/TweetList';
// @ts-ignore
import {BaseFrame} from '../../../frames/BaseFrame';

export const Profile = (props: any) => {
  const {
    route: {
      params: {
        user: {avatar, nick, username},
      },
    },
  } = props;

  return (
    <BaseFrame>
      <View style={styles.container}>
        <Text testID="header-username" style={styles.text}>
          {nick}
        </Text>
        <Image
          style={styles.image}
          source={{
            width: 64,
            height: 64,
            uri: avatar,
          }}
        />
      </View>
    </BaseFrame>
  );
};

const styles: any = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    marginBottom: -24,
    marginRight: 24,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 20,
  },
});
