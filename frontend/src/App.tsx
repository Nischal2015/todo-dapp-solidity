import { useEffect } from "react";
import { ConnectWallet } from "./components";
import { useTransaction } from "./context";
import { useConnectWallet } from "./hooks";

function App() {
  const connectWallet = useConnectWallet();
  const { isTransacting } = useTransaction();

  useEffect(() => {
    document.body.style.overflow = isTransacting ? "hidden" : "unset";
  }, [isTransacting]);

  return <ConnectWallet {...connectWallet} />;
}

export default App;
