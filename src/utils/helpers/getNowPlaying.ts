import axios from "axios"
import { trackSchema, trackType } from "../../schemas/track"

const getNowPlaying = async() : Promise<trackType> => {
    const {data} = await axios.get("/api/now-playing")
    
    return trackSchema.parse(data)
}

export { getNowPlaying }