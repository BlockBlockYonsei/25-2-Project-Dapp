import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";
import Donate from "./donation";

export interface SponsorCardProps {
  name: string;
  email: string;
  description: string;
  imageUrl: string;
  walletAddress: string;
}

function SponsorCard({ name, email, description, imageUrl, walletAddress}: SponsorCardProps) {
  return (
    <Card my="3">
      <Flex gap="3" align="center">
        <Avatar
        size="6"
        src={imageUrl}
        radius="full"
        fallback="T"
        />
        <Box mx="3">
          <Text as="div" size="2" weight="bold">
            {name}
          </Text>
          <Text as="div" mt="1"  size="2" weight="bold">
            {email}
          </Text>
          <Text as="div" mb="2" size="2" color="gray">
            {description}   
          </Text>
          <Donate
            name={name}
            email={email}
            description={description}
            imageUrl={imageUrl}
            walletAddress={walletAddress}
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default SponsorCard;
// export type { SponsorCardProps };