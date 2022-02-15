import React from 'react'

import Selection from '../layout/Selection'
import Tabs from '../layout/Tabs'

const IndexScreen = ({ navigation }) => {
    return (
        <>
            <Tabs />
            <Selection navigation={navigation} />
        </>
    )

}


export default IndexScreen