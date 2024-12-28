import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';

import { query, collection, getDocs } from 'firebase/firestore';
import { db } from '~/configs/FirebaseConfig';

export default function Slider() {
  const [sliderList, setSliderList] = React.useState([]);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    const q = query(collection(db, 'Slider'));
    const querySnapshot = await getDocs(q);
    const list = querySnapshot.docs.map((doc) => doc.data());
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <Text>Slid er</Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ padding: 20 }}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      />
    </View>
  );
}
