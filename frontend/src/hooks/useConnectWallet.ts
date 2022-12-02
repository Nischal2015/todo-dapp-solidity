import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";

export interface IUseConnectWallet {
  walletExistCheck: () => any;
  currentAccount: string | undefined;
  correctNetwork: boolean;
  setCorrectNetwork(value: boolean): void;
  connectWallet(): void;
  disable: boolean;
}

function startApp(provider: any) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
}
const GOERLI_CHAIN_ID = "0x5";

export const useConnectWallet = (): IUseConnectWallet => {
  const [correctNetwork, setCorrectNetwork] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<string | undefined>("");
  const [disable, setDisable] = useState<boolean>(false);

  const walletExistCheck = async () => {
    try {
      let { ethereum } = window;
      if (!ethereum) console.log("Metamask not detected");

      const provider = await detectEthereumProvider();
      if (provider) {
        startApp(provider);
      } else {
        console.log("Please install Metamask!");
      }

      return ethereum;
    } catch (error) {
      console.error(`Error connecting to metamask ${error}`);
    }
  };

  const isCorrectNetwork = async (): Promise<boolean> => {
    try {
      const ethereum = await walletExistCheck();
      const chainId = await ethereum.request({ method: "eth_chainId" });
      return Promise.resolve(chainId === GOERLI_CHAIN_ID);
    } catch (error) {
      return false;
    }
  };

  const connectWallet = async () => {
    try {
      const ethereum = await walletExistCheck();

      setDisable(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(`Found account: ${accounts[0]}`);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(`Error connecting to metamask ${error}`);
    } finally {
      setDisable(false);
    }
  };

  useEffect(() => {
    const isWalletConnected = async () => {
      try {
        const ethereum = await walletExistCheck();

        const accounts = await ethereum.request({
          method: "eth_accounts",
        });

        setCurrentAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    };

    isWalletConnected();
  }, [currentAccount]);

  useEffect(() => {
    const locationReload = () => {
      window.location.reload();
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", locationReload);
      window.ethereum.on("disconnect", locationReload);
      window.ethereum.on("chainChanged", locationReload);
    }

    return () => {
      window.ethereum.removeListener("accountsChanged", locationReload);
      window.ethereum.removeListener("disconnect", locationReload);
      window.ethereum.removeListener("chainChanged", locationReload);
    };
  }, []);

  useEffect(() => {
    isCorrectNetwork().then((val) => setCorrectNetwork(val));
  }, []);

  return {
    walletExistCheck,
    currentAccount,
    correctNetwork,
    setCorrectNetwork,
    connectWallet,
    disable,
  };
};
