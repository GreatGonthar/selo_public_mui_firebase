import { postsRef, usersRef } from "../../components/constants";
import { db } from "../../firebase";
import { setImageContent } from "../reducers/postData";
import { setAddPostPost, setDeletePost, setManyPosts } from "../reducers/posts";
import { getDocs, setDoc, doc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { setAddUser, setAddUsers } from "../reducers/users";

export const getFirebaseUsers = () => {
	return (dispatch) => {
		let arr = [];
		getDocs(usersRef).then((res) => {
			res.docs.map((el) => arr.push({ ...el.data(), id: el.id }));
			console.log("получили список пользователей из firebase", arr);
			dispatch(setAddUsers(arr));
		});
	};
};

export const setFirebaseUser = (user) => {
	return async (dispatch) => {
		await setDoc(doc(usersRef), user);
		console.log("отправили пользователя в firebase", user);
		dispatch(setAddUser(user));
	};
};
