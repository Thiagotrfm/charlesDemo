import React from 'react';
import { Image, Text, View } from 'react-native';

import Images from '../../assets/images';
import Button from '../../components/button';

import getKenieQuote from '../../services/kenie';

import styles from './styles';

const Quote = () => {
  const [quote, setQuote] = React.useState();

  const getNewQuote = React.useCallback(() => {
    getKenieQuote()
      .then((response) => {
        setQuote(response);
      })
      .catch(() => {
        setQuote('Error');
      })
  }, []);

  React.useEffect(() => {
    getNewQuote();
  }, []);

  const onPress = React.useCallback(() => {
    getNewQuote();
  }, []);

  return (
    <>
      <Image
        source={Images.kenie}
        style={styles.image}
        resizeMode='cover'
      />
      <View style={styles.overlay}>
        <Text style={styles.text}> {quote} </Text>
        <Button
          title='reload'
          onPress={onPress}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </>
  );
};

export default Quote;