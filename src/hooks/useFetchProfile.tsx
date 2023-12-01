import { useState, useEffect } from "react";
import axios from "axios";
import { Profile } from "../types";

const useFetchProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile`
        );
        setProfile(response.data);
      } catch (error) {
        setProfile(null); // Clear profile in case of error
        // Handle the error as needed
      }
    };

    fetchData();
  }, []);

  return profile;
};

export default useFetchProfile;
