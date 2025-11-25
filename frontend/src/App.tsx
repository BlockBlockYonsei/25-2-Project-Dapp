import { ConnectButton } from "@mysten/dapp-kit";
import SponsorCard, { SponsorCardProps } from "./card";
import Create from "./create";
import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Dialog,
  Text,
  TextField,
  Card,
  Inset,
} from "@radix-ui/themes";
import { WalletStatus } from "./WalletStatus";

function App() {
  const [cards, setCards] = useState<SponsorCardProps[]>([]);
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
  const creators = [
    {
      name: "육식맨",
      email: "yooxicman@gmail.com",
      description:
        "고기없이 못 사는 육식주의자를 위한 본격 육식 요리 채널!!!평범한 아파트 가정집에서 평범하지 않은 고기 요리에 도전합니다!",
      url: "https://www.youtube.com/@YOOXICMAN",
      img: "https://yt3.googleusercontent.com/ytc/AIdro_lbGsHHCH_1Oyx0ggvVYxjLT4duLZrIMW8mAsIvwcVoqRM=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "침착맨",
      email: "info@chimchakman.com",
      description: "반갑습니다. 오늘도 즐거운 날입니다.",
      url: "https://www.youtube.com/@ChimChakMan_Official",
      img: "https://i.namu.wiki/i/qGhidfEt7uEejAoCXRN6wRygLL4ePPRkfCdkP6HlhoGhSc6lfM4_Ys3EXO34w3vhO68qom1_XqSEaRkXDI02Sw.webp",
    },
    {
      name: "짐종국",
      email: "gymjongkook@gmail.com",
      description:
        "안녕하세요 김종국.. 아니 GYM 종국 ㅎ 입니다 ㅎ 자격증 이라곤 이 몸땡이 뿐인 ㅎ그냥 운동 좋아하고 오래 한 ㅎ 동네 아저씨 ㅎ 우리 다함께 건강한 대한민국을 위해서 쭉 함 달려봅시다!! 💪  ",
      url: "https://www.youtube.com/@GYMJONGKOOK",
      img: "https://images.khan.co.kr/article/2021/06/17/l_2021061702000980700179261.jpg",
    },
    {
      name: "빠더너스 BDNS",
      email: "business@bdns.co.kr",
      description:
        "하이퍼 리얼리즘의 콩트와 코미디 영상을 만듭니다. 웰메이드 코미디를 지향합니다. 콜라보, 비즈니스 문의는 문상훈을 춤추게 합니다",
      url: "https://www.youtube.com/@bdns",
      img: "https://yt3.googleusercontent.com/ytc/AIdro_nf1d3mTsgZsIDXewYisI6FY1VVA9vn8ddnrGqJMxa6gsg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "감스트GAMST",
      email: "no email info",
      description:
        "재미와 감동을 동시에 느낄 수 있는 감스트의 공식 유튜브 채널 (감튜브) 입니다! 감스트와 같이 찢으실 분들은 '구독' 눌러주시고 많이 시청하러 오세요 :-D",
      url: "https://www.youtube.com/@gamst6217",
      img: "https://i.namu.wiki/i/6InUn5pSWK13VaQCOqKFxerWsXmvm5KDJSQAWqmSrbytEEOUrfqvSc44tFKdHoVeKQ9oxMDc-ObHjEcnBYy1fw.webp",
    },
  ];
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>Crypto Donation</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container mt="5" mx="5" pt="2" px="4">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "16px",
            marginTop: "16px",
          }}
        >
          {creators.map((creator) => (
            <Box maxWidth="450px">
              <Card
                size="2"
                style={{
                  height: "600px", // 카드 전체 높이 고정
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // 내부 정렬 깨지지 않게
                }}
              >
                <Inset clip="padding-box" side="top" pb="current">
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <img
                        src={creator.img}
                        alt="thumbnail"
                        style={{
                          cursor: "pointer",
                          display: "block",
                          objectFit: "cover",
                          width: "100%",
                          height: 350,
                          backgroundColor: "var(--gray-5)",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.filter = "brightness(0.85)";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "brightness(1)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </Dialog.Trigger>
                    {/* ----- Dialog Content (모달 내용) ----- */}
                    <Dialog.Content maxWidth="500px">
                      <Dialog.Title>{creator.name}</Dialog.Title>
                      <Dialog.Description size="2" mb="4">
                        {creator.description}
                      </Dialog.Description>

                      <Flex direction="column" gap="3" mt="3">
                        <div>
                          <Text size="2" weight="bold">
                            Email:&nbsp;
                          </Text>
                          <Text>{creator.email}</Text>
                        </div>

                        <div>
                          <Text size="2" weight="bold">
                            유튜브 링크:&nbsp;
                          </Text>
                          <a href={creator.url} target="_blank">
                            {creator.url}
                          </a>
                        </div>
                      </Flex>

                      <Flex mt="4" justify="end" gap="3">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            닫기
                          </Button>
                        </Dialog.Close>
                        <Button variant="solid">후원하기</Button>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                  {/* ----- Dialog 끝 ----- */}
                </Inset>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  {creator.name}
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    fontSize: "15px",
                    fontWeight: "100",
                    color: "white",
                  }}
                >
                  {creator.email}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--gray-6)",
                    marginBottom: "10px",
                  }}
                ></div>
                <div
                  style={{
                    height: "120px",
                    overflow: "hidden",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {creator.description}
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <a href={creator.url} target="_blank">
                    <Button
                      style={{
                        width: "80%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      유튜브 채널 링크
                    </Button>
                  </a>
                </div>
              </Card>
            </Box>
          ))}
        </div>
      </Container>

      <div
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "60px" }}
      >
        <Dialog.Root>
          <Dialog.Trigger>
            <div>
              <Button
                style={{
                  width: "80%",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  fontSize: "20px",
                }}
              >
                Register
              </Button>
            </div>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="800px">
            <Dialog.Title>Register</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Register your Information.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Root placeholder="Enter your full name" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Root placeholder="Enter your email" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Description
                </Text>
                <TextField.Root placeholder="Enter your Description" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Creator URL
                </Text>
                <TextField.Root placeholder="Enter your URL" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Image URL
                </Text>
                <TextField.Root placeholder="Insert your Image file" />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Save</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        <Flex direction="column" gap="3" mt="4">
          <Create onCreate={handleCreateSupport} />
        </Flex>
      </div>
      <WalletStatus />
    </>
  );
}

export default App;
