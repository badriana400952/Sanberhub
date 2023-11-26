import SoalPertama from './SoalPertama'
import SoalKedua from './SoalKedua'
import SoalKetiga from './SoalKetiga'
import SoalKeempat from './SoalKeempat'

import { Box, Container, Flex } from '@chakra-ui/react'
const Home = () => {
    return (
        <>
            <Container maxW="container.2xl" mt={"20px"}>
                <Flex justifyContent={"space-around"} flexWrap={"wrap"} width={"100%"} >
                    <Box>
                        <SoalPertama />
                    </Box>
                    <Box>
                        <SoalKedua />
                    </Box>
                    <Box>
                        <SoalKetiga />
                    </Box>
                    <Box>
                        <SoalKeempat />
                    </Box>
                </Flex>
            </Container>

        </>
    )
}

export default Home
