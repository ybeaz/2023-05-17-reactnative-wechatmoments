import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from '../../Header/ui/Header';
import {TweetList} from '../../TweetList/ui/TweetList';
// @ts-ignore
import {BaseFrame} from '../../../frames/BaseFrame';

const Home = (prop: any) => {
  const {navigation} = prop;
  console.info('Home [12]', {navigation});

  return (
    <BaseFrame navigation={navigation}>
      <TweetList />
    </BaseFrame>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
