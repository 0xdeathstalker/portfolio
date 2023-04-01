import { Grid, Flex, Text, GridItem } from "@chakra-ui/react"

import { Builds as allBuilds } from "../../lib/constants/build"
import StyledLink from "../Misc/helpers/StyledLink"

const Builds = () => {
  return (
    <Flex direction="column" color="neutral.300">
        <Text 
            ml={{ md: "3" }} 
            mb="5" 
            color="neutral.200" 
            fontWeight="500"
        >
            My Builds
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

export default Builds