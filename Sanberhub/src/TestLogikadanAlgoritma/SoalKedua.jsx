import { useState } from 'react';
import { Input, Button, Box, List, ListItem, FormControl, FormLabel } from '@chakra-ui/react';

const SoalKedua = () => {
    const [inputString, setInputString] = useState('');
    const [karakterCount, setKarakterCount] = useState({});

    const hitungJumlahKarakter = () => {
        const karakterCountResult = {};

        for (const karakter of inputString) {
            if (karakter in karakterCountResult) {
                karakterCountResult[karakter] += 1;
            } else {
                karakterCountResult[karakter] = 1;
            }
        }

        setKarakterCount(karakterCountResult);
    };

    return (
        <Box>
            <FormControl paddingBottom={7} width={"200px"}>
                <FormLabel>masukan nama </FormLabel>
                <Input
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                />
            </FormControl>

            <Button onClick={hitungJumlahKarakter}>Hitung Jumlah Karakter</Button>

            <Box>
                <strong>Hasil:</strong>
                <List>
                    {Object.entries(karakterCount).map(([karakter, jumlah]) => (
                        <ListItem key={karakter}>
                            {karakter} = {jumlah}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default SoalKedua;
