import { postsRef } from "../../components/constants";
import { db } from "../../firebase";
import { setImageContent } from "../reducers/postData"
import { setAddPostPost, setDeletePost, setManyPosts } from "../reducers/posts"
import { getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

export const getFirebasePosts = () => {
    return (dispatch) => {        
        let arr = []
		getDocs(postsRef).then((res) => {
			res.docs.map((el) => arr.push({...el.data(), id: el.id}));	
            arr.sort((a, b) => b.date.seconds - a.date.seconds)		
            dispatch(setManyPosts(arr))
		});
    }
}
export const dellFirebasePost = (id) => {   
    return async (dispatch) => {        
        await deleteDoc(doc(db, "posts", id));
        dispatch(setDeletePost(id))
    }
}

export const setFirebasePost = (post) => {   
    return async (dispatch) => {        
            await setDoc(doc(postsRef), post);
            dispatch(setAddPostPost(post))
        };
    }


export const fetchRandomImage = () => {
    return (dispatch) => {
        fetch('https://random.imagecdn.app/800/600')
        .then(response => response.url)
        .then(url => dispatch(setImageContent(url)))
    }
}

