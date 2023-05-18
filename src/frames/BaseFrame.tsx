import React, {Children, Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from '../features/Header/ui/Header';

export const BaseFrame = (props: any) => {
  const {children, navigation} = props;

  console.info('baseFrame [8]', {navigation});
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
