import { VStack, FlatList, ScrollView } from 'native-base'
import React, { useState } from 'react'
import { getMovies } from '../service/api'
import Titles_card from './Titles_card'








const Titles_Container = ({ service, navigation }) => {

  const [movies, setMovies] = useState([]);

  getMovies(service).then(fetchedMovies => setMovies(fetchedMovies)).catch(err => console.error(err))

  return (
    <ScrollView>
      <VStack>

        {
          movies.map(movie => <Titles_card src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} name={movie.title} popularity={movie.popularity} release={movie.release_date} overview={movie.overview} navigation={navigation} />)
        }
      </VStack>
    </ScrollView>
  )
}

export default Titles_Container