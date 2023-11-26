import {
    Card, CardHeader, CardBody, IconButton, Box, Heading
    , Text, Flex, Avatar, Container
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsersID } from '../../store/dataSlice/DataUser';
import { Link, useParams } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
const ContentDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.data)
    useEffect(() => {
        dispatch(getUsersID(id))
    }, [dispatch, id])
    return (
        <>
            <Container mt={20}>
                <Card maxW='md' shadow={"lg"}>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={`${data.user_name}`} src={`${data.photo}`} />
                                <Box>
                                    <Heading size='sm'>{data.user_name}</Heading>
                                    <Text>{data.address}</Text>
                                </Box>
                            </Flex>
                            <Link to={`/`}>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    icon={<IoMdClose />}
                                />
                            </Link>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Flex display={"flex"} justifyContent={"start"} gap={5}>
                            <Box>
                                <Text size='md'>ID</Text>
                                <Text size='md'>Nama</Text>
                                <Text size='md'>Username</Text>
                                <Text size='md'>Alamat</Text>
                                <Text size='md'>Email</Text>
                                <Text size='md'>Jenis Kelamin</Text>
                                <Text size='md'>Tanggal Lahir</Text>
                            </Box>
                            <Box>
                                <Text size='md'>: {data.user_id}</Text>
                                <Text size='md'>: {data.name}</Text>
                                <Text size='md'>: {data.user_name}</Text>
                                <Text size='md'>: {data.address}</Text>
                                <Text size='md'>: Email</Text>
                                <Text size='md'>: {data.gender}</Text>
                                <Text size='md'>: {data.born_date}</Text>
                            </Box>
                        </Flex>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default ContentDetail
