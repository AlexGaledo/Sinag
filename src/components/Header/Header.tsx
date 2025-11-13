import { ConnectButton, darkTheme, useActiveWallet, useWalletBalance } from "thirdweb/react";
import { placeHolderTextCentered, buttonStyle} from "./reusableStyles";
import { client } from "../../client";
import { sepolia } from "thirdweb/chains";

export default function Header() {
  const wallet = useActiveWallet();

  // ✅ Only call the hook when wallet exists
  const { data, isLoading, isError } = useWalletBalance({
    client,
    chain: sepolia,
    address: wallet?.getAccount()?.address,
  });

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

  return (
    <header className="bg-blue-900">
      <div className="flex justify-end mb-20 m-4 gap-10">
        <button className={buttonStyle} onClick={checkWallet}>
          Check Balance {wallet && !isLoading && data ? `(${data.displayValue.slice()} ${data.symbol})` : ''}
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