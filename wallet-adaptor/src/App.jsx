import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';
import Ballance from './components/Ballance';
import SigningMsg  from './components/SigningMsg';
import Sendsol from './components/Sendsol';

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/IPOGuds9afqWqBWux0V20UhdrVRP5mA2"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>

            <WalletMultiButton />
            <WalletDisconnectButton />
            <Airdrop />
            <Ballance/>
            <SigningMsg />
            <Sendsol/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

    </>
  )
}

export default App