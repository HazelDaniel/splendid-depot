import { useQuery } from "react-query";
import { projectId } from "../../firebase/firebase.utils";

export const fetchUser = (id) => {
	fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${id}`);
}

export const useFetchUser = (id) => useQuery(["user",id],()=>fetchUser(id));