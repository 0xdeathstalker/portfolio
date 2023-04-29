import { FC } from 'react'
import { Flex, Text, Img, Link } from '@chakra-ui/react'
import { Kaisei_Decol } from "next/font/google"

import { Builds as data } from '../../lib/constants/build'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const kaisei = Kaisei_Decol({
    weight: "700",
    subsets: ["latin"]
})

interface IBuildItem {
    aboutTime: string,
    name: string,
    description: string,
    image?: string,
    url: string,
    githubRepo: string
}

const BuildItem: FC<IBuildItem> = ({ aboutTime, name, description, image, url, githubRepo }) => {
    return (
        <Flex direction="column" color="neutral.300" backgroundColor="neutral.900" borderRadius="8px" py="4" px="5">
            <Flex justifyContent="space-between" alignItems="center" gap={{ base: "5", md: "8" }}>
                <Flex direction="column" gap="2" pl={{ md: "3" }}>
                    <Link href={githubRepo} isExternal>
                        <Flex alignItems="center" gap="1">
                            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="700">{name}</Text>
                            <ArrowTopRightIcon />
                        </Flex>
                    </Link>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="neutral.400">{description}</Text>
                </Flex>
                
                <Flex filter="grayscale(100%)" _hover={{ filter: "grayscale(20%)", transition: "all 200ms ease-in-out" }}>
                    <Link 
                        w={{ base: "36" }} 
                        h={{ base: "24" }} 
                        p="3" 
                        borderRadius="3px" 
                        backgroundColor="neutral.800"
                        href={url} 
                        isExternal 
                    >
                        <Img
                            w="full"
                            h="full"
                            borderRadius="3px"
                            src={image}
                            alt={name}
                        />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

const Builds: FC = () => {
  return (
    <Flex maxW="590px" gap="6" direction="column" mt={{ md: "3" }} px={{ base: "2", md: "0" }}>
        <Text className={kaisei.className} fontSize="3xl" color="neutral.300">My Builds</Text>

        <Flex direction="column" gap="6">
            {data.map((item, index) => (
                <BuildItem
                    key={index}
                    aboutTime={item.aboutTime}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    url={item.url}
                    githubRepo={item.githubRepo}
                />
            ))}
        </Flex>
    </Flex>
  )
}

export default Builds