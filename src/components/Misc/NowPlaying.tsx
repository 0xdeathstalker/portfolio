import { Flex, Text, Link } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { BsSpotify } from "react-icons/bs"

import { getNowPlaying } from '../../utils/helpers/getNowPlaying'

const NowPlaying = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["songs"],
        queryFn: getNowPlaying,
        refetchOnWindowFocus: true
    })

  return (
    <Flex flexGrow="1" p="5" gap="2" alignItems="center" backgroundColor="neutral.900" borderRadius="8px">
        {data?.isPlaying? (
            <Flex alignItems="center" gap="3">
                <BsSpotify size={22} color="#1DB954" />
                <Link 
                    href={data?.url}
                    isExternal
                    textDecor="none"
                    _hover={{textDecor: "none"}}
                    noOfLines={1}
                    color="neutral.300"
                >
                    Listening to {data?.title}
                </Link>
            </Flex>
        ) : (
            <Flex alignItems="center" gap="3">
                <BsSpotify size={22} />
                <Text color="neutral.500" >Currently not playing anything</Text>
            </Flex>
        )}
    </Flex>
  )
}

export default NowPlaying