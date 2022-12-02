import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const TransactionContext = createContext<
  | {
      isTransacting: boolean;
      setIsTransacting: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function TransactionProvider({ children }: { children: ReactNode }) {
  const [isTransacting, setIsTransacting] = useState(false);

  return (
    <TransactionContext.Provider value={{ isTransacting, setIsTransacting }}>
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction() {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error(
      "useTransactionProvider must be used with a TransactionProvider"
    );
  }
  return context;
}

export { TransactionProvider, useTransaction };
