import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Trial() {
  const data = [1, 2, 3, 4, 5, 7, 8, 9, 0];
  const [number, setNumber] = React.useState([]);

  const input = element => {
    setNumber([...number, element]);
  };

  return (
    <View>
      {data.map((element, index) => {
        return (
          <TouchableOpacity onPress={() => input(element)} key={index}>
            <Text>{element}</Text>
          </TouchableOpacity>
        );
      })}
      {number.map(element => {
        return (
          <View>
            <Text>{element}</Text>
          </View>
        );
      })}
    </View>
  );
}
