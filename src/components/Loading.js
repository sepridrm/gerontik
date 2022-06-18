import React from "react"
import {
    Modal,
    VStack,
    Spinner,
    Text
} from "native-base"

export const Loading = ({ showModal }) => {
    return (
        <Modal isOpen={showModal}>
            <VStack alignItems="center" backgroundColor="white" p={5} borderRadius={7}>
                <Spinner color="emerald.500" />
                <Text fontFamily="semi-bold">Loading</Text>
            </VStack>
        </Modal>
    )
}

export default Loading
