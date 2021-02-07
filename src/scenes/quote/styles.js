import { Dimensions, StyleSheet } from "react-native";

const Constants = {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        bottom: 100,
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        width: 200,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
    image: {
        height: Constants.height,
        width: Constants.width,
    },
    overlay: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: Constants.height,
        justifyContent: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        width: Constants.width,
    },
    text: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: 'white',
        fontSize: 18,
    }
  });

  export default styles;
