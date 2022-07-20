import React, {useEffect, useRef} from 'react';
import {Animated, Keyboard} from 'react-native';

const KeyboardSpacer: React.FC<{
  offSet?: number;
}> = ({offSet = 0}) => {
  const keyboardHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', e => {
      Animated.timing(keyboardHeight, {
        toValue: e.endCoordinates.height - offSet,
        useNativeDriver: false,
        duration: 350,
      }).start();
    });

    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      Animated.timing(keyboardHeight, {
        toValue: 0,
        useNativeDriver: false,
        duration: 350,
      }).start();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardHeight, offSet]);

  return <Animated.View style={{height: keyboardHeight}} />;
};

export {KeyboardSpacer};
