import axios from "axios";
import { API } from "../api/config";

export const searchUser = (username) => async (dispatch) => {
    try {
        dispatch({
            type: "Search_Request"
        });
        const userResponse = await axios.get(`${API}/${username}`)
        .then((res)=>{
            // res.data
            let data=res.data
            return data
        })

        dispatch({
            type: "Fetch_Data",
            payload: {
                avatar: userResponse.avatar_url,
                name: userResponse.name,
                username: userResponse.login,
                company: userResponse.company,
                email: userResponse.email,
                location: userResponse.location,
                twitter: userResponse.twitter_username,
                website: userResponse.blog,
                bio: userResponse.bio,
                follower: userResponse.followers,
                following: userResponse.following,
                public_repo: userResponse.public_repo,
                join_date: userResponse.created_at,
                hireable: userResponse.hireable
            }
        })

    } catch (error) {
        dispatch({
            type: "Fetch_Error",
            payload: error.error,
        });
        console.log(error);

    }
}