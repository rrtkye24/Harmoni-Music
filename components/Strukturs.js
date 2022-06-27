import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    HStack,
    Button,
    Flex,
    Stack,
    Grid,
    GridItem,
    Center,
} from '@chakra-ui/react'

function Strukturs() {

    return (
        <Box p={20} bg={'blackAlpha.200'}>
            <Box p={3}>
                <Text fontSize={'3xl'}>Daftar Majelis Pusat dan Daerah</Text>
            </Box>
            <Accordion defaultIndex={[0]} allowMultiple allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton bg={'blackAlpha.100'} _expanded={{ bg: 'blackAlpha.100', color: 'black' }}>
                            <Box flex='1' textAlign='left' as='b'>
                                Majelis Pusat
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua Umum :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Paul Daniel Massie</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Kabid Pendidikan & Misi :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Danie F. Wulur</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Kabid Penggembalaan :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Samuel St. Silas</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Kabid Penatalayanan :</Text>
                                </GridItem>
                                <Flex>
                                    <GridItem>
                                        <Text>Pdt. Ronni Wowor</Text>
                                    </GridItem>
                                </Flex>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Kabid Pelayanan Masyarakat :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Ronni Wowor</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Sekretaris Umum :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Giarto</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Sekretaris 1:</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Victor Philipus Chandra</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Sekretaris 2:</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Merryam Jone Onibalae</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Bendahara Umum:</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Merryam Jone Onibala</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Bendahara :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdm. Netty Sulaeman</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Hukum & Peraturan GSPDI :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Jacky Kembuan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Hubungan Antar Lembaga :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdm. Ivan Samuel Heydemans</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Pemuda & Anak Hamba Tuhan :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Irene Debora Lesar</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Wanita:</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Sarah Hetty Sritati</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Anak Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Markus Margono Pratigno</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Pendidikan & Pengajaran :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Manahan Uji Simanjuntak</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Misi :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Nicolas Ricky Prins Mawuntu</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Penanaman Gereja :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Serfie Bernard Liando</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. IT, Multimedia & Profesi :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdm. Ray Gutafson Manurung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Diakonia :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Jessy Massie</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <Text>Dept. Sosial :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Pdt. Donny Wakary</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                Majelis Pembina Rohani
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua:</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Mulyadi Sulaeman</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdt. Tono Yoshua Ray</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>	Pdt. Freddy E. Zacharia</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>	Pdt. Jacky Heydemans</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Johanes Djumari</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Chrisman Hutabarat</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Benny Raya Korompis</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Johny J. Kembuan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Tommy R. Lesar</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anggota:</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdt. Herry Pramono</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 1 - SUMATERA UTARA & ACEH
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Erikson LM. Simamora</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Hisar Gurning</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Joseph Sianturi</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Bendahara :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Pascal Jemalut</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita & Anak :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Gloria Simarmata</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Pdm. Sapril Sianipar :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Biro Pemuda & Anak Hamba Tuhan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Misi & Penginjilan :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Rudi Hartono Situmorang</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pendidikan & Pengajaran :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Darlin Timothy Siahaan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia & Sosial :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Saur Silalahi</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 2 - RIAU
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Ricson Sitorus</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Ur. Penatalayanan :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>	Pdt. Daniel Sitorus</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Ur. Penggembalaan :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdt. Pantas Panjaitan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Erni Hutauruk</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Sekretaris :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdt. Jhonwesly Siahaan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara:</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdt. Juni Anna Silitonga</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Bendahara :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Diana Naomi Gultom</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Hubungan Antar Lembaga :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdm. Daniel Tarihoran</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pemuda & Anak Hamba Tuhan :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Jeremy Sunday Sitorus</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita, Diakonia & Sosial :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Suzana Cheng</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Kartini Gultom</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Misi :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Ruth Manulang</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro IT & Multimedia :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Amsal Marbun</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pendidikan :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdt. Jusni Tamba</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 3 - DKI, BANTEN, LAMPUNG, BABEL
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Simon A. Torrys</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Netty Sulaeman</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Ivan Heydemans</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Sekretaris :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdp. Elsa Maria Sugianto</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdm. Krisianty Suhartono</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Bendahara :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Phebe Latif</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Pdt. Bambang Iman S. :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Biro Hubungan Antar Lembaga</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Misi & Penanaman Gereja :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdt. Ricky Mawuntu</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pemuda & Anak Hamba Tuhan :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Yanti Yap</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>	Pdm. Lena Magdalena W.</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdm. Belly Chevren Torris</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Informasi Teknologi & Multimedia :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdm. Heppy Yohanes</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia & Sosial :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Lauw Merry</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pendidikan & Pengajaran :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> Pdm. Stevanus E. Torrys</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Hukum :</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>Pdp. Ribka Fransilia</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 4 - JAWA BARAT
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdt. Markus Pratigno</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Ronni Wowor</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdt. Ariel Massie</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Wakil Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Daniel Gunawan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdp. Libertina Timotheus Manurung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Veronicha Nussa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Hukum & Hubungan Antar Lembaga </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdt. John Wesley Onibala</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pendidikan & Misi</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdt. Harun Wiyanto</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdp. Yemima CM. Korompis</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Senny Rosiany Korompis</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdp. Sanni Simare mare</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro IT & Multimedia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdp. Mikhael Mordekhai Massie</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia & Sosial </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 		Pdt. Haniel Yafia Massie</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 5 - JAWA TENGAH & DI. YOGYAKARTA
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Sarah Hetty Sritati</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Danie F. Wulur</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Agung Djumari</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: 	Pdm. Yohanes Kristiawan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text> Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Victor Philipus Chandra</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penatalayanan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Zefanya Peter</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pendidikan & Kaderisasi </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: 	Pdt. Indra Tarigan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Misi </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Hengky Tabang</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita & Anak </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Trivena Mami Suparmi</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. David Sutomo</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Shinta Veronicha T.</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 6 - JAWA TIMUR & BALI
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt.Johanes Naftali</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Abetnego</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Piter Christop Sarumaha</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Wakil Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. David Kirojan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Djems Djemy Kaloh</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Donny Kaleb Setiawan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Misi & Penanaman Gereja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Rionald RP. Raintung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Doa, Ibadah, & Multimedia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdp. Yusuf Permata Mega</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Sosial & Diakonia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Debora DHEK</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Sonya Schramm</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Louis William Schramm</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Vivy Nanlohy</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 7 - SULAWESI SELATAN & SULAWESI TENGAH
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Magda Lenny da Costa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Anthonius R. Mappadang</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Yan Kabanga</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Jimmy Lengkong</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penatalayanan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Rizard MA. da Costa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Misi </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Martinus Sirua Matangkin</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : 	Pdt. Esky Danielle Tonto&apos;u</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdm. Missiyon Towelo</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdt. Julien VE. Pereman</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia & Sosial </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}> : Pdp. Agustin</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 8 - SULAWESI UTARA
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Merryam Jone Anibala</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Penatalayan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Feckie Mawuntu</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Pendidikan & Misi </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Robby Karamoy</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Ivan Heydemans</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Pengembalaan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Hizkia Ivert Sarempaa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Pelayanan Masyarakat </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Harry Polii</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua Verifikasi & Aset </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt.David Oldy Rawung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: 	Pdt. Herman Lius</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: 	Pdt. Jacky Kambuan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Merryam Jone Anibala</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Debby Sangian</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Refly Paat</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Hubungan Antar Lembaga </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Izakh Palar</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Philip Mongie</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Irene D. Lesar</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Femi Poluan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Misi & Penanaman Gereja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Stenly Rasubala</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Merryam Jone Anibala</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pendidikan & Pengajaran </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Devry Schalwijk</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro IT & Multimedia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Epha Jay Metia</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diankonia & Sosial </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Sonny J. Oroh</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diankonia & Sosial</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Ferry Rondonuwu</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 9 - KALIMANTAN
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Anthon Arman</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Wakil Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Yakobus Sunarto</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Aneke Sagai</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Ketrina</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Maleaki Ladung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Doa </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Martina</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Jefri Mokodompit</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Biro Pendidikan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Julmawardin Zebua</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penanaman Gereja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Yulius S. Pambudi</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penanaman Gereja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdp. Adrianus Minen</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Koestina</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penatalayanan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm.Yusak Hadi Prayitno</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 10 - KEPULAUAN RIAU
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Daniel Duma Tandi</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Manahan Simanjuntak</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Khin Sun (Yermia Chung)</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penginjilan & Misi </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Mardius Tarigan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Hotmaida Nababan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Julius Sutarwi</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia & Sosial </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdp. Sabatani Waruwu</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' as='b'>
                                MAJELIS DAERAH FILADELFIA 11 - PAPUA, PAPUA BARAT, MALUKU & MALUKU UTARA
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box justifyContent={'center'} bg={'whiteAlpha.800'}>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Reynold Tuwo</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Sekretaris </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Harold Manoppo</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Bendahara </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Youtje Angkouw</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pendidikan & Pengajaran </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Johny Warouw</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Pemuda & Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. William P. Tuwo</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Anak & Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Agnes Rumbajan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Penginjilan & Misi </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Albert Samangun</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Diakonia & Sosial</Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Yardi Surabi</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Penelitian & Pengembangan (Ketua) </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Natanael Makarawung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Penelitian & Pengembangan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Yoseph Sianturi / Hisar Gurning</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Penelitian & Pengembangan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Rionald Raintung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Etika, Hukum & Peraturan Gereja (Ketua) </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. David Oldy Rawung</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Etika, Hukum & Peraturan Gereja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Charles Pakpahan</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>	Etika, Hukum & Peraturan Gereja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Rizard Mac Arthur da Costa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Penginjilan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Ivert Sarempaa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Penginjilan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Albert Samangun</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Penginjilan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Albert Samangun</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Vivy Nanlohy</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Biro Wanita </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Gloria Simarmata</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Pemuda & Remaja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Sem da Costa</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Pemuda & Remaja </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdp. Yemima Korompis</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Stefanus E. Torrys</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Jeremy Sunday</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anak Hamba Tuhan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdp. Mikhael Mordekhai Massie</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Anak & Guru Sekolah Minggu </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Gery Seroh</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Konseling </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. Ernest Torrys</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Konseling </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Abetnego</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Pemuridan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Yusuf Kurnia</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Pemuridan </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Robby H. Karamoy</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>Ketua </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Reynold Tuwo</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>IT & Multimedia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdt. Zefanya Peter</Text>
                                </GridItem>
                            </Grid>
                            <Grid p={3} templateColumns='repeat(2, 1fr)'>
                                <GridItem >
                                    <Text>IT & Multimedia </Text>
                                </GridItem>
                                <GridItem >
                                    <Text alignItems={"right"}>: Pdm. William Schramm</Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>
    )
}

export default Strukturs