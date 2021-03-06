import { useState, useEffect } from "react";
import initilizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken  } from "firebase/auth";



// initilizeFirebase app 
initilizeFirebase();
const useFirebase = ()=>{
    const [user, setUser] =useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setauthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')


    const googleProvider = new GoogleAuthProvider()

    const auth = getAuth()

    const registerUser = (email, password, name, history)=>{

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setauthError('')
          const newUser = {email, displayName:name}
          // send name to firebase after creation
          setUser(newUser)
          // save user to data base 
          saveUser(email, name, 'POST')
            updateProfile(auth.currentUser, {
              displayName:name, 
            }).then(() => {
            }).catch((error) => {
            });
          history.replace('/')
          })
          .catch((error) => {
            setauthError(error.message);
            // ..
          })
          .finally(()=>setIsLoading(false))
    }

    const loginUser = (email, password, location, history)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/'
          history.replace(destination)
           setauthError('')
            })
            .catch((error) => {
              setauthError(error.message);
            })
            .finally(()=>setIsLoading(false));
    }

    const signInwithGoogle =(location, history)=>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user
            saveUser(user.email, user.displayName, 'PUT')
            setauthError('')
           const destination = location?.state?.from || '/'
           history.replace(destination)
          }).catch((error) => {
           setauthError(error.message)
          })
          .finally(()=>setIsLoading(false));;
    }

    // observer user state 
     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(getIdToken =>{
               setToken(getIdToken)
              })
       
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=>unsubscribe;
        
    }, [])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data?.admin))

    }, [user?.email])

    const logOut =()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
        .finally(()=>setIsLoading(false));
    }

  const saveUser =(email, displayName, method)=>{
    const user = {email, displayName};
    fetch('http://localhost:5000/users',{
      method:method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then()
  }
    return{
        user,
        admin,
        token,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInwithGoogle

    }
}

export default useFirebase;