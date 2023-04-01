import { FC } from "react"
import { Flex, Text, Link } from "@chakra-ui/react"
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons"

interface IStyledLink {
  name: string,
  url: string,
  description: string,
  aboutTime: string,
  githubRepo: string,
}

const StyledLink: FC<IStyledLink> = ({ name, url, description, aboutTime, githubRepo }) => {
  return (
    <Flex
      h="full"
      direction="column"
      justifyContent="space-between"
      p="5"
      border="1px"
      borderColor="neutral.800"
      borderRadius="8px"
      color="neutral.200"
      _hover={{ bg: "neutral.900" }}
    >
      
      <Text
        color="neutral.200"
        mb="3"
      >
        {name}
      </Text>
      
      <Text
        color="neutral.400" 
        noOfLines={2}
        fontSize={{ md: "md" }}
      >
        {description}
      </Text>
      
      <Flex 
        mt="3" 
        alignItems="center" 
        justifyContent="space-between"
      >
        <Flex>
          <Link
            href={url}
            isExternal
            mr="3"
          >
            <ExternalLinkIcon />
          </Link>

          <Link 
            href={githubRepo} 
            isExternal
          >
            <GitHubLogoIcon />
          </Link>
        </Flex>
        
        <Text color="neutral.600" fontSize={{ md: "sm" }}>{aboutTime}</Text>
      </Flex>
    </Flex>
  )
}

export default StyledLink