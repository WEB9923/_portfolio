import axios from "axios";


export const getData = async (url) => {
   try {
      const response = await axios.get(url);
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}

