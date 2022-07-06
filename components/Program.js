import React from 'react'
import {
    Center,
    Box,
    Container,
    Stack,
    useColorModeValue,
    Text,
    Heading,
    Image,
    Badge,
    Collapse,
    Button
} from '@chakra-ui/react'
function ProgramCard({ image }) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <Box p={10}>
            <Center py={12}>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'230px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: { image },
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <center>
                            <Image
                                pt='35'
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                alt=''
                                src={'img/logo.png'}
                            />
                        </center>
                    </Box>
                    <Stack align={'center'}>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800}>
                            KEYBOARD
                        </Heading>
                        <Badge colorScheme='purple'>New</Badge>
                        <Collapse startingHeight={150} in={show}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'capitalize'} align={'center'}>
                                Mempelajari permainan alat musik keyboard dengan fokus pembelajaran mulai dari belajar bentuk dan teori chord, pengembangan bentuk chord serta pengaplikasiannya pada lagu-lagu pop umum. Permainan keyboard pada umumnya digunakan untuk mengcover lagu-lagu pop dan bisa juga untuk format band. Pengajar memiliki background kuliah S1 di jurusan musik, berpengalaman mengajar serta profesional di bidangnya.
                            </Text>
                        </Collapse>
                        <Button size='sm' onClick={handleToggle} mt='1rem'>
                             {show ? 'Kembali' : 'Selengkapnya'}
                        </Button>
                        <Button size='sm' bg="whatsapp.400" _hover={{ bg: "whatsapp.600" }}>
                            Mau Daftar
                        </Button>
                    </Stack>
                </Box>
            </Center>
        </Box>
    )
}



export default function Program() {
    return (
        <Box className='png'>
            <ProgramCard/>
        </Box> 
  )
}
