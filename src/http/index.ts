// import { db } from "../db"
// import {collection, getDocs, query, onSnapshot} from 'firebase/firestore' 

// export const getMainQuestion = async () => {
//     const q = query(collection(db, 'question'))
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         let todoArr = [];
//         querySnapshot.foreach(doc => {
//             todoArr.push({...doc.data(), id: doc.id});
//         })
//     });
// }
