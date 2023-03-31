import { FC } from 'react'
import { Flex, Text, Link } from '@chakra-ui/react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Builds } from '../../lib/constants/build'

interface IITemProps {
    aboutTime: string;
    name: string;
    url: string;
}

const Item: FC<IITemProps> = ({aboutTime, name, url}) => {
    return (
        <Flex alignItems="center" gap="6" w="full">
            <Text color="neutral.400" w="20">
                {aboutTime}
            </Text>
            <Link href={url} isExternal>
                <Text color="neutral.300" display="flex" alignItems="center" gap="1">
                    <Text as="span">{name}</Text>
                    <ArrowTopRightIcon />
                </Text>
            </Link>
        </Flex>
    )
}

const MinimalBuilds = () => {
  return (
    <Flex color="neutral.100" gap="4" alignItems="center" w="full">
        <Flex direction="column" gap="4">
            <Text fontWeight="500">Builds at a glance</Text>
            <Flex direction="column" gap="6">
                {Builds.map((build, index) => (
                    <Item
                        key={index}
                        aboutTime={build.aboutTime}
                        name={build.name}
                        url={build.url}
                    />
                ))}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default MinimalBuilds