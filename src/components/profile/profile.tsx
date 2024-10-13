"use client";

import firebase_app, { firestore } from "@/config/firebase-config";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    address: "",
  });

  useEffect(() => {
    const unregisterAuthObserver = getAuth(firebase_app).onAuthStateChanged(
      (user) => {
        console.log(user);
        if (user?.email) {
          const docRef = doc(firestore, "users", user.email);
          getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              setUser(docSnap.data() as never)
            } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
            }
          });
        }
      }
    );
    return unregisterAuthObserver;
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 pt-4 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome back {user.name}
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {user.email}
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {user.address}
        </p>
      </div>
    </section>
  );
};

export default Profile;
