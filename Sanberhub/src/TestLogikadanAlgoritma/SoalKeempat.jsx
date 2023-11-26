import  { useState } from 'react';
import { FormControl,FormLabel, Input, Button, Text, VStack } from '@chakra-ui/react';

const SoalKeempat = () => {
  const [deretAngka, setDeretAngka] = useState('');
  const [hasilStatistik, setHasilStatistik] = useState(null);

  const hitungStatistikDeret = () => {
    try {
      const angka = deretAngka.split(/[,\s]+/).map(Number);

      if (angka.some(isNaN)) {
        throw new Error("Format deret tidak valid. Gunakan angka yang valid, pisahkan dengan koma atau spasi.");
      }

      const nilaiTerbesar = Math.max(...angka);
      const nilaiTerkecil = Math.min(...angka);
      const nilaiRataRata = angka.reduce((acc, curr) => acc + curr, 0) / angka.length;

      setHasilStatistik({
        nilaiTerbesar,
        nilaiTerkecil,
        nilaiRataRata,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <VStack spacing={4} align="center">
     <FormControl paddingBottom={7} width={"200px"}>
                <FormLabel>masukan nama </FormLabel>
        <Input
          placeholder="Masukkan deret angka (pisahkan dengan koma atau spasi)"
          value={deretAngka}
          onChange={(e) => setDeretAngka(e.target.value)}
        />
      </FormControl>
      <Button onClick={hitungStatistikDeret}>Hitung Statistik</Button>

      {hasilStatistik && (
        <VStack>
          <Text>Nilai Terbesar: {hasilStatistik.nilaiTerbesar}</Text>
          <Text>Nilai Terkecil: {hasilStatistik.nilaiTerkecil}</Text>
          <Text>Nilai Rata-rata: {hasilStatistik.nilaiRataRata}</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default SoalKeempat;
