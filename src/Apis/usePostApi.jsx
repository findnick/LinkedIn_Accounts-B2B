import React, { useEffect, useState } from "react";
import axios from "axios";

function usePostApi(path) {
  const [postData, setPostData] = useState("");
  const [response, setResponse] = useState("");

  const fetch = async (data, header = null) => {
    try {
      const response = await axios.post(
        `https://cbbe-111-88-225-88.ngrok-free.app/api/${path}`,
        data,
        { headers: header }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(response);
      throw error;
    }
  };

  return [postData, setPostData, response, fetch];
}

export default usePostApi;
