import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Item, HeaderButtons } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen!</Text>
    </View>
  );
};

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        {' '}
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FilterScreen;
