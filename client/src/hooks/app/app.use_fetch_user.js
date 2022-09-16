import { useQuery } from "react-query";
import { projectId } from "../../firebase/firebase.utils";
import axios from "axios";





const fetchUser = ({queryKey}) => {
	console.log(queryKey)
	return axios.get(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${queryKey[1]}`).catch(err=>{
		throw err;
	})
};

export const useFetchUser = (uid) => {
	return useQuery({
		queryKey: ["user",uid],
		queryFn: fetchUser,
		staleTime: 0,
		enabled: !!uid,
		keepPreviousData: false,
		cacheTime: 0
	})
}