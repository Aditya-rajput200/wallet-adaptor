import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useEffect, useState } from 'react'

  function Ballance() {
    useEffect(() => {
        ballance();
        const interval = setInterval(ballance, 10000);
        return () => clearInterval(interval);
      }, []);
    
    const [sol, setSol] = useState(0);
    const wallet = useWallet();
  const {connection} = useConnection();
  if (!connection) {
    return null;
  }
  const ballance =async ()=>{
    const info = await connection.getBalance(wallet.publicKey)
   setSol( info)
  }
  

  return (
   <>
   Sol:{sol/1000000000}
   </>
  )           
}

export default Ballance