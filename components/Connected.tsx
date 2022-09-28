import { Button, Container, Heading, VStack, Text, HStack,Image } from '@chakra-ui/react';
import { FC } from 'react';
const Connected: FC = () => {

    return (
        <VStack spacing={20}>
            <Container>
                <VStack spacing={8} >
                    <Heading color="white" as='h1' size='2xl' noOfLines={1} textAlign='center'>
                        Welcome Buildoor.
                    </Heading>
                    <Text color="bodyText" fontSize="xl" textAlign='center'>
                        Each buildoor is randomly generated and can be staked to recieve
                        <Text as='b'>$BLD</Text>. Use your <Text as='b'>$BLD</Text> to upgrade your buildoor and recieve perks within the community!
                    </Text>
                </VStack>
            </Container>
            <HStack spacing={5}>
                <Image src="avatar1.png" alt="" boxSize='15vw'/>
                <Image src="avatar2.png" alt="" boxSize='15vw'/>
                <Image src="avatar3.png" alt="" boxSize='15vw'/>
                <Image src="avatar4.png" alt="" boxSize='15vw'/>
                <Image src="avatar5.png" alt="" boxSize='15vw'/>
            </HStack>
            <Button bgColor="accent" color="white" maxW="300px">
                <Text>Mint Buildoor</Text>
                
            </Button>
        </VStack>
    )
}

export default Connected;