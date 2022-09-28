import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Center, Spacer, Stack } from '@chakra-ui/react';
import Navbar from "../components/Navbar";
import Disconnected from '../components/Disconnected';
import Connected from '../components/Connected';
import { useWallet } from '@solana/wallet-adapter-react';

const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT collection for Buildoors" />
        <link rel="icon" href="/faviconico" />
      </Head>
      <Box w='full' h='calc(100vh)' bgImage={connected?"":'url(/home-background.svg)'} backgroundPosition="center" >
        <Stack w='full' h='calc(96vh)' justify='center' >
          {/*NAVRBAR */}
          <Navbar />
          <Spacer />
          <Center>
            { connected ?<Connected />:<Disconnected />}
          </Center>
          <Spacer />
          <Center>
            <Box marginBottom={4} color="white" >
              <a href="https://twitter.com/PrakharOjha4" target="_blank" rel="noopener noreferrer">
                Build by @prakharOjha
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
