import { postsRef } from "../../components/constants";
import { auth, db } from "../../firebase";
import { setImageContent } from "../reducers/postData";
import { setAddPostPost, setDeletePost, setManyPosts } from "../reducers/posts";
import { getDocs, setDoc, doc, deleteDoc, addDoc, collection } from "firebase/firestore";

import { GoogleAuthProvider, signInWithPopup, signOut, deleteUser, signInWithRedirect } from "firebase/auth";

import { setAddUser } from "../reducers/users";
import { setAuthIn } from "../reducers/authUser";
import { useSelector } from "react-redux";
import { setFirebaseUser } from "./users";

export const getUserGoogleAccount = () => {
	return async (dispatch) => {
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({
			prompt: "select_account",
		});

		const answer = await signInWithPopup(auth, provider);
		console.log("ответ на попытку авторизоватся", answer);
		const user = {
			displayName: answer.user.displayName,
			email: answer.user.email,
			photoURL: answer.user.photoURL,
			emailVerified: answer.user.emailVerified,
			uid: answer.user.uid,
		};
		dispatch(setAuthIn(user));
	};
};
