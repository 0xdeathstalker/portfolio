import { FC } from "react"
import { Grid, Flex, Text, GridItem, Link } from "@chakra-ui/react"
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Builds as allBuilds } from "../../lib/constants/build"
import StyledLink from "../Misc/helpers/StyledLink"

interface ILinkItem {
    aboutTime: string;
    name: string;
    description?: string;
    url: string;
    githubRepo?: string;
}

const LinkItem: FC<ILinkItem> = ({ name, aboutTime, url }) => {
    return (
        <Flex 
            w="full"
            alignItems="center"
            justifyContent="space-between"
            gap="6"
            p="4"
            border="1px"
            borderRadius="8px"
            borderColor="neutral.800"
        >
            <Text>{name}</Text>
            <ArrowTopRightIcon />
        </Flex>
    )
}

const LinkBuilds: FC = () => {
    return (
        <Flex direction="column" gap="3">
            <Text 
                ml={{ md: "3" }} 
                color="neutral.200" 
                fontWeight="500"
            >
                Builds
            </Text>

            <Grid
                templateColumns={{ md: "repeat(2, 1fr)" }}
                templateRows="repeat(2, 1fr)"
                gap="4"
            >
                {allBuilds.map(( build, index ) => (
                    <GridItem key={index}>
                        <LinkItem 
                            key={index}
                            name={build.name}
                            aboutTime={build.aboutTime}
                            url={build.url}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}

const BoxBuilds: FC = () => {
    return (
        <Flex direction="column" gap="3" color="neutral.300">
            <Text 
                ml={{ md: "3" }} 
                color="neutral.200" 
                fontWeight="500"
            >
                Builds
            </Text>
        
            <Grid
                templateColumns={{ md: "repeat(2, 1fr)" }}
                templateRows="repeat(2, 1fr)"
                gap="4"
            >
                {allBuilds.map(( item, index ) => (
                    <GridItem key={ index }>
                        <StyledLink 
                            name={ item.name }
                            description={ item.description }
                            url={ item.url }
                            githubRepo={ item.githubRepo }
                            aboutTime={ item.aboutTime }
                        />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}

const Builds = () => {
  return (
    <BoxBuilds />
  )
}

export default Builds