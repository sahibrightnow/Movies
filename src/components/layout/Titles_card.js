import {Image, HStack, VStack, Text, Button, FlatList } from 'native-base'
import React from 'react';


const Titles_card = ({popularity, release, src, name, overview, navigation}) => {
  return (
  
      <HStack mt="2" ml="2">
        <Image source={{
          uri: src
        }} alt="Alternate Text" size={'xl'} />
        <VStack ml="2" m="auto">
          <Text bold="true">
          {name}
      
          </Text>
          <Text>Popularity: {popularity} </Text>
          <Text>Release Date: {release}</Text>
          <Button w="100%"  onPress={() =>
                navigation.navigate('Show', {
                  popularity, release, src, name, overview
                })
              }
            > More Details </Button>
        </VStack>
      </HStack>
  
  )
}

export default Titles_card