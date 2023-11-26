import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container, Button, Box, Flex, Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import ReactLoading from 'react-loading';
import nodata from "../../assets/nodata.png"
import ContentHooks from '../../hooks/ContentHooks'
const Content = () => {
    const { ubahTangal, handleDelete, loading, data, } = ContentHooks()
    return (
        <>
            <Container maxW="container.xl" mt={"20px"}>
                <Button>
                    <Link style={{ "textDecoration": "none" }} to={`/add`}>Add User</Link>
                </Button>
                <TableContainer borderRadius={"10px"} border={"1px"} borderColor={"gray.200"} my={"30px"}>
                    <Table >
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Nama</Th>
                                <Th>Alamat</Th>
                                <Th>P/W</Th>
                                <Th>Tanggal Lahir</Th>
                                <Th>Tanggal Input</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody >
                            {loading ? (
                                <Tr>
                                    <Td colSpan={7} textAlign="center" p={4}>
                                        <Flex justify="center" align="center" w="100%">
                                            <ReactLoading type={'spokes'} color={"blue"} height={'100px'} width={'100px'} />
                                        </Flex>
                                    </Td>
                                </Tr>
                            ) : Array.isArray(data) && data.length > 0 ? (
                                Array.isArray(data) && data.map((data, index) => (
                                    <Tr key={data.id} borderRadius={"10px"} mb={"10px"}>
                                        <Td>{index + 1}</Td>
                                        <Td>{data.name}</Td>
                                        <Td>{data.address}</Td>
                                        <Td>{data.gender}</Td>
                                        <Td>{ubahTangal(data.born_date)}</Td>
                                        <Td>{ubahTangal(data.created_at)}</Td>
                                        <Td display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                            <Box mt={"10px"}>
                                                <Link style={{ "textDecoration": "none" }} to={`/detail/${data.id}`}><FaEye /></Link>
                                            </Box>
                                            <Box mt={"10px"}>
                                                <Button bg={'transparent'} _hover={{ bg: "transparent" }} onClick={() => handleDelete(data.id)}><RiDeleteBin6Line /></Button>
                                            </Box>
                                            <Box mt={"10px"}>
                                                <Link style={{ "textDecoration": "none" }} to={`/edit/${data.id}`}><FaPencil /></Link>
                                            </Box>
                                        </Td>
                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={7} textAlign="center" m={8} p={4}>
                                        <Flex justify="center" align="center" w="100%">
                                            <Image src={nodata} alt="No data" width={"300px"} />
                                        </Flex>
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default Content
