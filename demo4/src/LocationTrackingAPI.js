import Axios from 'axios';
const ip_address = "192.168.0.106"

const submitLocation =  async (coordinate)=>{
    let result = await Axios.post(
        `http://${ip_address}:3000/record_position`,
        coordinate,
      );

    return result
}

const queryLocations = async ()=>{
    let result = await Axios.get(`http://${ip_address}:3000/position`);
    return result
}

export {submitLocation, queryLocations}