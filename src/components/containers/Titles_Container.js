import { VStack, FlatList, ScrollView } from 'native-base'
import React, { useState } from 'react'
import { getTitles } from '../service/api'
import Titles_card from '../card/Titles_card'








const Titles_Container = ({ service, navigation, category }) => {

  const [movies, setMovies] = useState([]);

  getTitles(category, service).then(fetchedMovies => setMovies(fetchedMovies)).catch(err => console.error(err))

  return (
    <ScrollView>
      <VStack>

        {
          movies.map(movie => <Titles_card src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} name={movie.title || movie.name} popularity={movie.popularity} release={movie.release_date || movie.first_air_date} overview={movie.overview} navigation={navigation} />)
        }
      </VStack>
    </ScrollView>
  )
}

export default Titles_Container