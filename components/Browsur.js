import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image,
    Link
} from '@chakra-ui/react'
import { AiOutlineArrowDown } from 'react-icons/ai'
export function Browsur() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                bg={"blackAlpha.800"}
                rounded={"full"}
                color={"whiteAlpha.700"}
                _hover={{ bg: "blue.400" }}
                href="/#katasambutan"
                p={6}
                onClick={onOpen}
            >
                <AiOutlineArrowDown size={28} /> Pilih Instrument
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' isCentered
                size={'xs'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image alt='' src={'img/browsur.jpeg'} width={300} height={300} />
                    </ModalBody>

                    <ModalFooter>
                        <Link
                        href="https://wa.me/6281271886601?text=Hallo%20,saya%20telah%20mengunjungi%20website%20Harmony%20Music%20dan%20tertarik%20untuk%20mendaftar%20dan%20bergabung%20bersama%20Harmony%20Music"
                        target="_blank"
                        >
                            <Button colorScheme='blue' mr={3}>
                                Mau Ikut !
                            </Button>
                        </Link>
                        <Link
                        href='#program'
                        >
                        <Button variant='ghost'>Pilih Instrument</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Browsur