import {
    Card, CardHeader, CardBody, IconButton, RadioGroup, Stack, Radio, Flex, Container, Box, Button, FormControl, FormLabel, Input
} from '@chakra-ui/react'
import { IoMdClose } from "react-icons/io";
import { Link, 
} from 'react-router-dom'
import AddContenHooks from '../../hooks/AddContenHooks';
const AddContent = () => {
    const {
        handleSubmit,
        handleChange,
        handleChangeRadio
      } = AddContenHooks();
    
    return (
        <>
            <Container>
                <Card maxW='md' shadow={"lg"}>
                    <CardHeader>
                        <Flex spacing='4' justifyContent='end'>
                            <Box >
                                <Link to={`/`}>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                        icon={<IoMdClose />}
                                    />
                                </Link>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Box  >
                            <form onSubmit={handleSubmit}>
                                <Box >
                                    <FormControl paddingBottom={7}>
                                        <FormLabel>Nama </FormLabel>
                                        <Input variant='flushed' type='text' onChange={handleChange} name="name" placeholder="Nama" />
                                    </FormControl>

                                    <FormControl paddingBottom={7}>
                                        <FormLabel>Alamat</FormLabel>
                                        <Input variant='flushed' type='text' name="address" onChange={handleChange} placeholder="Alamat" />
                                    </FormControl>

                                    <FormControl paddingBottom={7}>
                                        <FormLabel>Jenis kelamin</FormLabel>
                                        <RadioGroup onChange={(value) => handleChangeRadio("gender", value)}>
                                            <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='red' value='l' name='gender'>
                                                    Laki-Laki
                                                </Radio>
                                                <Radio colorScheme='green' value='p' name='gender'>
                                                    Perempuan
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </FormControl>

                                    <FormControl paddingBottom={7}>
                                        <FormLabel>Tanggla Lahir</FormLabel>
                                        <Input variant='flushed' type='date' name="born_date" onChange={handleChange} placeholder="Tanggal Lahir" />
                                    </FormControl>


                                    <FormControl mt={4}>
                                        <Button type="submit" px={9} colorScheme='teal' size='md' 
                                            loadingText='Loading'
                                            variant='outline'
                                            spinnerPlacement='start'>Tambah</Button>
                                    </FormControl>

                                </Box>
                            </form>
                        </Box>
                    </CardBody>

                </Card>
            </Container>
        </>
    )
}

export default AddContent
