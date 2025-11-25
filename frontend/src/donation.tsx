import { Flex, Button, Text,
  Dialog, TextField,
} from "@radix-ui/themes";

import { useCurrentAccount } from "@mysten/dapp-kit";
import SponsorCard, {SponsorCardProps} from "./card";
// import { Transaction } from "@mysten/sui/transactions";
// import { useSuiClient } from "@mysten/dapp-kit";

import { useState } from "react";

// const PACKAGE_ID = "0xc82fd546ef132f3a5dfbaff9136fc344770495a52c0dbd428961fb7c34190120";
// const MODULE_NAME = "crypto_donation";
// const FUNCTION_NAME = "register_creator";

interface DonateProps {
  send: string;
  memo: string;
  amount: number;
  receiver: string;
  
  onDonate: (send: string, memo: string, amount: number, receiver: string) => void;
}

function Donate({ name, email, description, imageUrl, walletAddress}: SponsorCardProps) {
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');
  const account = useCurrentAccount();
  const handleDonate = () => {
    
    if (!account) {
      alert("지갑을 먼저 연결해주세요!");
      return;
    }
    try {
      // const tx = new Transaction();
    } catch (err) {
      console.error(err);
    }

  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="2" style={{ cursor: 'pointer'}}>후원하기</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>후원하기</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make a donation.
        </Dialog.Description>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              후원금액
            </Text>
            <TextField.Root
              placeholder="Enter your donation amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              후원 메시지
            </Text>
            <TextField.Root
              placeholder="Enter your donation memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleDonate}>Donation</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>

  )
}

export default Donate;