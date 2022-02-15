import React from 'react';
import { HStack, Center } from 'native-base';

const Tabs = () => {
    
    return (
        <HStack space={3} justifyContent="space-around">
            <Center flex={1} my="4">
                Movies
            </Center>
            <Center flex={1} my="4">
                Search Results
            </Center>
            <Center flex={1} my="4">
                TV Shows
            </Center>
        </HStack>

    )
}

export default Tabs