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
            <Modal  isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' isCentered
size={'xs'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image alt='' src={'img/browsur.jpeg'} width={300} height={300} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Mau Ikut !
                        </Button>
                        <Button variant='ghost'>Pilih Instrument</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Browsur