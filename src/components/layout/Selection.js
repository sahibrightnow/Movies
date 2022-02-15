import React, { useState } from 'react';
import { Select, Center, Box, CheckIcon } from "native-base";
import TitlesContainer from './Titles_Container';

const Selection = ({navigation}) => {
    let [service, setService] = useState("popular");
    return (
        <>
            <Center>
                <Box w="3/4" maxW="300" mb="2">
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Popular" placeholder="Popular" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Now Playing" value="now_playing" />
                        <Select.Item label="Popular" value="popular" />
                        <Select.Item label="Top rated" value="top_rated" />
                        <Select.Item label="Upcoming" value="upcoming" />

                    </Select>
                </Box>
            </Center>

            <TitlesContainer service={service} navigation={navigation}/>
        </>
    )
}

export default Selection