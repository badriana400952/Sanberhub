import { useState } from 'react';
import { Input, Button, Text, Box, FormControl, FormLabel } from '@chakra-ui/react';

const generateSeries = (pattern, length) => {
    const series = [];

    for (let i = 0; i < length; i++) {
        switch (pattern) {
            case 1:
                series.push(Math.pow(i + 1, 2));
                break;
            case 2:
                series.push(i === 0 ? 1 : series[i - 1] + i);
                break;
            case 3:
                series.push(i === 0 ? 0 : i === 1 ? 0 : series[i - 1] + series[i - 2]);
                break;
            default:
                break;
        }
    }

    return series;
};

const SoalKetiga = () => {
    const [length, setLength] = useState('');
    const [series1, setSeries1] = useState([]);
    const [series2, setSeries2] = useState([]);
    const [series3, setSeries3] = useState([]);

    const handleGenerateSeries = () => {
        const parsedLength = parseInt(length, 10);
        if (!isNaN(parsedLength) && parsedLength > 0) {
            setSeries1(generateSeries(1, parsedLength));
            setSeries2(generateSeries(2, parsedLength));
            setSeries3(generateSeries(3, parsedLength));
        } else {
            alert('Panjang deret harus merupakan angka positif.');
        }
    };

    return (
        <Box >

            <FormControl paddingBottom={7} width={"200px"}>
                <FormLabel>masukan nama </FormLabel>
                <Input
                    type="number"
                    placeholder="Masukkan panjang deret"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </FormControl>
            <Button my={5} onClick={handleGenerateSeries}>
                Generate
            </Button>

            <Box>
                <Text>Deret Pola 1: {series1.join(" ")}</Text>
                <Text>Deret Pola 2: {series2.join(" ")}</Text>
                <Text>Deret Pola 3: {series3.join(" ")}</Text>
            </Box>
        </Box>
    );
};

export default SoalKetiga;
