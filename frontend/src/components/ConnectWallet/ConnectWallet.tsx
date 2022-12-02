import { useState } from "react";
import { Button, Container, Loading, Modal, Typography } from "~/components";
import { IUseConnectWallet } from "~/hooks";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { StyledGrid, StyledFlexBox } from "./Styles";
import { CreateTodo, Hero, Todo } from "~/pages";
import { apiDataShaper } from "~/utils";
import { useTodo } from "~/context";

function ConnectWallet({
  currentAccount,
  correctNetwork,
  connectWallet,
  disable,
  setCorrectNetwork,
  walletExistCheck,
}: IUseConnectWallet) {
  const [openModal, setOpenModal] = useState(!correctNetwork);
  const { todos } = useTodo();

  const onClickHandler = async () => {
    try {
      const ethereum = await walletExistCheck();
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: `0x${Number(5).toString(16)}`,
          },
        ],
      });
      setCorrectNetwork(true);
    } catch (error) {}
  };

  const correctNetworkElement = () => {
    if (!correctNetwork)
      return (
        <Modal
          variant='contained'
          openModal={openModal}
          setOpenModal={setOpenModal}
          renderContent={
            <>
              <StyledGrid>
                <BellAlertIcon />
                <StyledFlexBox>
                  <div>
                    <Typography as='h2' color='white'>
                      Alert Info
                    </Typography>
                    <Typography fontSize='1.6rem' color='white'>
                      The network used with this account is not Goerli. We
                      suggest you switch to Goerli Network to use the app's
                      functionality.
                    </Typography>
                  </div>
                  <Button onClick={onClickHandler} variant='outlined'>
                    Switch to Goerli
                  </Button>
                </StyledFlexBox>
              </StyledGrid>
            </>
          }
        />
      );
    return (
      <Container>
        <Typography>Connected Account: {currentAccount}</Typography>
        <CreateTodo />
        <Todo datas={apiDataShaper(todos)} />
        <Loading />
      </Container>
    );
  };

  return (
    <div>
      {!currentAccount ? (
        <Hero disable={disable} buttonHandler={connectWallet} />
      ) : (
        correctNetworkElement()
      )}
    </div>
  );
}

export default ConnectWallet;
