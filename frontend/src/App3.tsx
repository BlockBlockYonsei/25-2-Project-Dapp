import { ConnectButton } from "@mysten/dapp-kit";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
} from "@radix-ui/themes";
import SponsorCard, { SponsorCardProps } from "./card";
import Create from "./create";

import { useState } from "react";

import { WalletStatus } from "./WalletStatus";

function App() {
  const [cards, setCards] = useState<SponsorCardProps[]>([]);

  // 3. Create 컴포넌트에서 'Save'를 눌렀을 때 실행될 함수입니다.
  const handleCreateSupport = (
    name: string,
    email: string,
    description: string,
    imageUrl: string,
    amount: number,
    walletAddress: string,
  ) => {
    // 받은 데이터로 새로운 카드 객체를 만듭니다.
    const newCard: SponsorCardProps = {
      name,
      email,
      description,
      imageUrl,
      walletAddress,
    };

    // 기존 목록(...cards)에 새 카드(newCard)를 추가합니다.
    setCards([...cards, newCard]);
  };

  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        align="center"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Flex align="center" gap="6">
          <Box>
            <Heading>Sui-sponsor-platform</Heading>
            <Text size="2" color="gray">
              창작자에게 Sui를 후원해보세요!
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap="4">
          <Button variant="ghost" style={{ cursor: "pointer" }}>
            홈
          </Button>
          <Button variant="ghost" style={{ cursor: "pointer" }}>
            소개
          </Button>
          <Button variant="ghost" style={{ cursor: "pointer" }}>
            프로젝트 찾기
          </Button>
          <Button variant="ghost" style={{ cursor: "pointer" }}>
            내 후원 내역
          </Button>

          <ConnectButton />
        </Flex>
      </Flex>

      <Container size="4">
        <Container
          mt="2"
          pt="2"
          px="4"
          style={{ background: "var(--gray-a2)", minHeight: 500 }}
        >
          <Flex direction="column" gap="3" mt="4">
            <Create onCreate={handleCreateSupport} />
          </Flex>

          <Grid columns="3" gap="4" width="auto">
            {cards.map((card, index) => (
              <SponsorCard
                key={index}
                name={card.name}
                email={card.email}
                description={card.description}
                imageUrl={card.imageUrl}
                walletAddress={card.walletAddress}
              />
            ))}

            <SponsorCard
              name="Teodros Girmay"
              email="test@example.com"
              description="Engineering"
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64"
              walletAddress="0xA1ice"
            />
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default App;
