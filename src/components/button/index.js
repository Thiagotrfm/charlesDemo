import React from 'react';
import { 
    Text,
    TouchableOpacity,
} from 'react-native';

const Button = ({onPress, style, textStyle, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
        <Text style={textStyle}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;
