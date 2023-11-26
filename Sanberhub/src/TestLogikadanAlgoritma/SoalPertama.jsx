import { useRef } from 'react'
import { Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
const SoalPertama = () => {
    const inputRef = useRef(null);
    const resultTitleRef = useRef(null);
    const resultStripRef = useRef(null);

    const formatString = () => {
        const inputString = inputRef.current.value;
        const formattedStrip = inputString.replace(/\s+/g, '-');
        const formattedTitle = formattedStrip
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const formattedAlphaNumeric = formattedTitle.replace(/[^a-zA-Z0-9\s]/g, ' ');
        resultTitleRef.current.textContent = `hasil tanpa strip): ${formattedAlphaNumeric}`;
        resultStripRef.current.textContent = `hasil dengan strip: ${formattedAlphaNumeric.replace(/\s+/g, '-')}`;
    };
    
    return (
        <>
            <Box>
                <FormControl paddingBottom={7} width={"200px"}>
                    <FormLabel>masukan nama </FormLabel>
                    <Input type="text" ref={inputRef} />
                </FormControl>
                <Button onClick={formatString}>Format</Button>
                <Box ref={resultTitleRef}></Box>
                <Box ref={resultStripRef}></Box>
            </Box>
        </>
    )
}

export default SoalPertama
