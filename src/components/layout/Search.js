import React, {useState} from 'react';
import { Text, Button, FormControl, HStack, Icon, Input, VStack, Center, Box, Select, CheckIcon, ScrollView} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {getSearch} from '../service/api';
import Titles_card from '../card/Titles_card';

const Search = ({navigation}) => {

    
    const [formData, setData] = useState({})
    
    let [service, setService] = useState("multi");
    let [entity, setEntity] = useState("");
    let [titles, setTitles] = useState([]);

    const handleInputChange = search => {
        setEntity(search)
      }
  
    const onSubmit = () => {
        getSearch('search', service, entity).then(fetchedMovies => setTitles(fetchedMovies)).catch(err => console.error(err))
      
    }
  return (
      <>
    <VStack space={2} width='80%' py={5}>
      <FormControl isRequired>
        <FormControl.Label fontSize='sm'> Search for Movie/TV Show</FormControl.Label>
        <HStack width='100%' space={2}>
          <Input
            placeholder='i.e. James Bond, CSI'
            variant='filled'
            bg='gray.200'
            px={3}
            width='85%'
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
            onChangeText={value => {
              handleInputChange(value)
              setData({ ...formData, name: value })
            }}
          />
          <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
        </HStack>
        <Text>
            Choose search type
        </Text>
      </FormControl>
      <Center>
      <Box w="100%">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Multi" placeholder="Multi" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="TV" value="tv" />
          <Select.Item label="Multi" value="multi" />
          <Select.Item label="Movie" value="movie" />
        
        </Select>
      </Box>
    </Center>
  
    
    </VStack>
    <ScrollView >
      <VStack w="100%">

        {
          titles.map(movie => <Titles_card src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} name={ movie.title || movie.name} popularity={movie.popularity} release={movie.release_date || movie.first_air_date} overview={movie.overview} navigation={navigation} />)
        }
      </VStack>
    </ScrollView>
    </>
  )
}

export default Search