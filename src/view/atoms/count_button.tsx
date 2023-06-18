// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '../../firebase';
// import { useState } from 'react';

// // const CountButton: React.FC = () => {
// // //   const [inputText, setInputText] = useState('');

// //   // TODO追加
// //   const onPressed = async () => {
// //     // if (inputText === '') return;
// //     console.log("button on pressed fired !")
//     // await addDoc(collection(db, 'todos'), {
//     //     count: 0,
//     //     createdAt: serverTimestamp(),
//     // });
// //     // setInputText('');
// //   };
// //   return (
// //     // <form onSubmit={onSubmitAdd} style={{ display: 'inline' }}>
// //     //   <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
// //       <button onClick={() => onPressed}>追加</button>
// //     // {/* </form> */}
// //   );
// // };

// function LikeButton() {
//     const [count, setCount] = useState(999);
//     const handleClick = async () => {
//         console.log("pressed")
//       setCount(count + 1);
//       await setDoc(doc(db, "cities", "LA"), {
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA"
//       });
//     //   await addDoc(collection(db, 'todos'), {
//     //     count: 0,
//     //     createdAt: serverTimestamp(),
//     // });
//     };
//     return (
//       <span className="likeButton" onClick={handleClick}>
//         ♥ {count}
//       </span>
//     );
//   }

// export default LikeButton;
