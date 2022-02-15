import React from 'react'
import { Box, Button, Center, Text, Image } from 'native-base'

const TitleContainer = ({ route }) => {
  const { name, src, overview, popularity, release } = route.params

  return (
    <>
      <Box width='100%'>
        <Center py={10}>
        <Text bold="true">
        {name}
         
        </Text>
        <Image source={{
        uri: src
      }} alt="Alternate Text" size={'xl'} />
     
        <Text>{overview}</Text>
       
        <Text>Popularity: {popularity} </Text>
        <Text>Release Date: {release}</Text>
          
        </Center>
      </Box>
    </>
  )
}

export default TitleContainer