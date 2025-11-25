import { Flex, Button, Text,
  Dialog, TextField,
} from "@radix-ui/themes";
import { useState } from 'react';
// import { WalletStatus } from "./WalletStatus";
import { useCurrentAccount, useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { Transaction,  } from "@mysten/sui/transactions";

const DEFAULT_IMAGE_URL = "https://via.placeholder.com/150?text=No+Image";
const PACKAGE_ID = "0xc82fd546ef132f3a5dfbaff9136fc344770495a52c0dbd428961fb7c34190120";
const MODULE_NAME = "crypto_donation";
const FUNCTION_NAME = "register_creator";


interface CreateProps {
  onCreate: (name: string, email: string, description: string, imageUrl: string, amount: number, wallet: string) => void;
}


function Create({ onCreate }: CreateProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [amount, setAmount] = useState('');
  const account = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  const handleSave = () => {
    if (!account) {
      alert("지갑을 먼저 연결해주세요!");
      return;
    }
    
    const finalImageUrl = imageUrl ? imageUrl : DEFAULT_IMAGE_URL;
    const amountNum = Number(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      alert("유효한 후원금액을 입력해주세요.");
      return;
    }

    try {
    const tx = new Transaction();
    const mist: number = amountNum * 1_000_000_000;
    const nameStr = tx.moveCall({
      target: '0x1::string::utf8',
      arguments: [tx.pure.string(name)],
    });
    const descStr = tx.moveCall({
      target: '0x1::string::utf8',
      arguments: [tx.pure.string(description)],
    });
    const imgStr = tx.moveCall({
      target: '0x1::string::utf8',
      arguments: [tx.pure.string(finalImageUrl)],
    });

    const emailStr = tx.moveCall({
      target: '0x1::string::utf8',
      arguments: [tx.pure.string(email)],
    });
    const emailVec = tx.makeMoveVec({
      type: '0x1::string::String',  // <--- ★★★ 이 한 줄이 정답입니다.
      elements: [emailStr] 
    });

    // [핵심] 금액(Tags) 벡터 생성
    const amountVec = tx.makeMoveVec({
      type: 'u64',
      elements: [tx.pure.u64(mist)]
    });
    
    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::${FUNCTION_NAME}`,
      arguments: [
        nameStr,
        descStr,
        imgStr,
        emailVec,
        amountVec,           
      ],
    });
    signAndExecuteTransaction({ 
        transaction: tx,
        chain: 'sui:testnet'
      },
      {
        onSuccess: (result) => {
          console.log("등록 성공:", result);
          onCreate(name, email, description, finalImageUrl, amountNum, account.address);
        },
        onError: (err) => {
          console.error("등록 실패:", err);
          alert("트랜잭션 실행 중 오류가 발생했습니다.");
        }
      }
    );
    } catch (err) {
      console.error("등록 실패:", err);
      alert("트랜잭션 실행 중 오류가 발생했습니다.");
    }
  };


  return (
    <Dialog.Root>
	    <Dialog.Trigger>
		    <Button size="4">후원만들기</Button>
	    </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>후원 만들기</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root
              placeholder="Enter your Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              ImageUrl
            </Text>
            <TextField.Root
              placeholder="Enter your imageUrl (if you want)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              목표 후원금액
            </Text>
            <TextField.Root
              placeholder="Enter your goal amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            <Button onClick={handleSave}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default Create;