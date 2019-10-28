import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedbackComponent
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedbackComponent;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={styles.touchable} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.text} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    aligntItems: 'flex-end'
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  },
  touchable: {
    flex: 1
  }
});

export default CategoryGridTile;
