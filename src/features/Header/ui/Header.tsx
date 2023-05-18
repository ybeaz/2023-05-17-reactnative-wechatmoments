import React, {ReactElement, useEffect} from 'react';

import {
  TouchableOpacity,
  Image,
  ImageBackground,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {BasicStyle, IUser, RootState} from './../../../types';
import {useAppDispatch} from './../../../hooks';
import {fetchUser} from '../state/user.thunk';
import {connect} from 'react-redux';

interface IHeaderProps {
  user: IUser;
  navigation: any;
}

// @ts-ignore
export function HeaderComponent({
  user,
  navigation,
}: IHeaderProps): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser('jsmith'));
  }, []);

  return (
    <View style={styles.container} testID="header-container">
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: user.profileImage,
        }}>
        <View style={styles.userWrapper}>
          {/* <Link to={{screen: 'Profile'}}> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile', {user});
              console.info('Header [37]');
            }}>
            <Text testID="header-username" style={styles.text}>
              {user.nick}
            </Text>
            <Image
              style={styles.image}
              source={{
                width: 64,
                height: 64,
                uri: user.avatar,
              }}
            />
          </TouchableOpacity>
          {/* </Link> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = (state: RootState) =>
  ({
    user: state.user.data,
  } as IHeaderProps);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  };
};

export const Header = connect(mapStateToProps, {}, mergeProps)(HeaderComponent);

interface AdditionalStyles {
  backgroundImage: ImageStyle;
  userWrapper: ViewStyle;
}

const styles: Partial<BasicStyle> & AdditionalStyles = StyleSheet.create<
  Partial<BasicStyle> & AdditionalStyles
>({
  container: {
    height: 230,
    backgroundColor: 'white',
  },
  image: {
    marginBottom: -24,
    marginRight: 24,
    backgroundColor: '#e4f0f5',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
