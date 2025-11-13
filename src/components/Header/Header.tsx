import { ConnectButton, darkTheme, useActiveWallet, useWalletBalance, useSendTransaction } from "thirdweb/react";
import { placeHolderTextCentered, buttonStyle} from "./reusableStyles";
import { client } from "../../client";
import { sepolia } from "thirdweb/chains";
import { prepareTransaction, toWei } from "thirdweb";

export default function Header() {
  const wallet = useActiveWallet();

  // ✅ Only call the hook when wallet exists
  const { data, isLoading, isError } = useWalletBalance({
    client,
    chain: sepolia,
    address: wallet?.getAccount()?.address,
  });

  const { mutate: sendTx } = useSendTransaction();

  const checkWallet = async () => {
    if (!wallet) {
      alert("No wallet connected");
      return;
    }

    if (isLoading) {
      alert("Fetching balance...");
      return;
    }

    if (isError) {
      alert("Error fetching balance");
      return;
    }

    if (data) {
      alert(`Balance: ${data.displayValue} ${data.symbol}`);
    } else {
      alert("Balance data not available yet");
    }
  };

  const burnSepoliaETH = async () => {
    if (!wallet) {
      alert("No wallet connected");
      return;
    }

    const account = wallet.getAccount();
    if (!account) {
      alert("No account found");
      return;
    }

    // Burn by sending to zero address
    const burnAmount = "0.001"; // Amount to burn in ETH
    
    const transaction = prepareTransaction({
      client,
      chain: sepolia,
      to: "0x0000000000000000000000000000000000000000", // Zero address = burn
      value: toWei(burnAmount),
    });

    try {
      sendTx(transaction, {
        onSuccess: (result) => {
          alert(`Successfully burned ${burnAmount} Sepolia ETH!\nTx: ${result.transactionHash}`);
        },
        onError: (error) => {
          alert(`Error burning tokens: ${error.message}`);
        },
      });
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };
    
  return (
    <header className="bg-blue-900">
      <div className="flex justify-end mb-20 m-4 gap-10">
        <button className={buttonStyle} onClick={checkWallet}>
          Check Balance {wallet && !isLoading && data ? `` : ''}
        </button>

        <button className={buttonStyle} onClick={burnSepoliaETH}>
          Burn 0.001 ETH
        </button>

        <ConnectButton
          client={client}
          theme={darkTheme({
            colors: {
              primaryButtonText: "hsl(0, 100%, 99%)",
              primaryButtonBg: "hsl(0, 0%, 11%)",
              secondaryButtonHoverBg: "hsl(228, 2%, 28%)",
            },
          })}
        />
      </div>
    </header>
  );
}