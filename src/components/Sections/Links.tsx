import {FC} from 'react'
import {Flex, Text, Link} from "@chakra-ui/react"
import {ArrowTopRightIcon} from "@radix-ui/react-icons"

import { ExternalLinks } from '../../lib/constants/urls'

interface IItemProps {
    name: string;
    url: string;
    username: string;
}

const Item: FC<IItemProps> = ({name, url, username}) => {
    return (
        <Flex alignItems="center" gap="6" w="full">
            <Text color="neutral.400" w="20">
                {name}
            </Text>
            <Link href={url} isExternal>
                <Text color="neutral.300" display="flex" alignItems="center" gap="1">
                    {username}
                    <ArrowTopRightIcon />
                </Text>
            </Link>
        </Flex>
    )
}

const Links = () => {
  return (
    <Flex color="neutral.100" gap="4" alignItems="center" w="full">
        <Flex direction="column" gap="4">
            <Text fontWeight="500">Connect / Links</Text>
            <Flex direction="column" gap="6" w="full">
                {ExternalLinks.map((link, index) => (
                    <Item 
                        key={index}
                        name={link.name}
                        url={link.url}
                        username={link.username!}
                    />
                ))}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Links