import { Flex, Text, Link } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import {BsSpotify} from "react-icons/bs"
import { getNowPlaying } from '../../utils/helpers/getNowPlaying'

const NowPlaying = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["songs"],
        queryFn: getNowPlaying,
        refetchOnWindowFocus: true
    })

  return (
    <Flex mt="2" gap="2" alignItems="center">
        {data?.isPlaying? (
            <Flex alignItems="center" gap="2">
                <BsSpotify size={22} color="#1DB954" />
                <Link 
                    href={data?.url}
                    isExternal
                    textDecor="none"
                    _hover={{textDecor: "none"}}
                    noOfLines={1}
                >
                    Listening to {data?.title}
                </Link>
            </Flex>
        ) : (
            <Flex alignItems="center" gap="2">
                <BsSpotify size={22} />
                <Text>Not playing anything</Text>
            </Flex>
        )}
    </Flex>
  )
}

export default NowPlaying