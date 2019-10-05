import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment'

export default function AccelerationItem({ item }) {
  const defaultImage = 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'
  return (
    <View style={Styles.container}>
        <Image
          style={Styles.image}
          source={{ uri: item.banner_url || defaultImage }}
        />
      <View style={Styles.containerInfo}>
        <Text style={Styles.text1}>{item.name}</Text>
        <Text style={Styles.text2}>{item.location}</Text>
        <Text style={Styles.text3}>{moment(item.subscription_finish_at).format('DD/MM/YYYY')}</Text>
      </View>
    </View>
  );
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#EEE',
    marginTop: 10
  },
  containerImage: { 
    borderRightWidth: 1 
  },
  image: { 
    height: 100, 
    width: 100,
    borderWidth: 2,
    borderColor: '#EEE'
  },
  containerInfo: { 
    flex: 1, 
    justifyContent: 'space-between', 
    paddingVertical: 10, 
    paddingLeft: 5 
  },
  text1: { fontSize: 20 },
  text2: { fontSize: 15, color: '#7800ff' },
  text3: { fontSize: 14 },

})
