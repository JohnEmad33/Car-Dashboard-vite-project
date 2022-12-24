import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithRedirect,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc,getDocs,addDoc,collection} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJ9t4AnByWU1DQJ-Ez7bDsMyuNAeW0KK8",
  authDomain: "cars-db-cb00a.firebaseapp.com",
  projectId: "cars-db-cb00a",
  storageBucket: "cars-db-cb00a.appspot.com",
  messagingSenderId: "254118410178",
  appId: "1:254118410178:web:e7e8d98376eece9671c85b"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    const userDocRef = doc(db, 'users',userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const{displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

return await signInWithEmailAndPassword(auth,email,password);
};

export const arrayBookingCar = [{
    id:1,
    fill:"none",
    carImage:"car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb",
    class:"carBookings"
  },{
    id:2,
    fill:"#F84F56",
    carImage:"usecar",
    class:"carBookings"
  },{
    id:3,
    fill:"none",
    carImage:"white car",
    class:"carBookings"
  },{
    id:4,
    fill:"none",
    carImage:"maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31",
    class:"carBookings1"
  },{
    id:5,
    fill:"none",
    carImage:"suzuki-ertiga-maruti-car-suzuki-ciaz-suzuki-dcac04d3f676c91c7ca6f2d195b86ff3",
    class:"carBookings2"
  },{
    id:6,
    fill:"none",
    carImage:"toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1",
    class:"carBookings3"
  },{
    id:7,
    fill:"none",
    carImage:"car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb",
    class:"carBookings"
  },{
    id:8,
    fill:"none",
    carImage:"usecar",
    class:"carBookings"
  },{
    id:9,
    fill:"none",
    carImage:"white car",
    class:"carBookings"
  }];

  export const addCarsData = async () => {
    const carsCollection = collection(db, "cars");
    arrayBookingCar.map((car) => addDoc(carsCollection, car));
  };

  export const fetchCars = async () => {
    const carsCollection = collection(db, "cars");
    const carsData = await getDocs(carsCollection);
    const Cars = [];
    carsData.docs.map((car) => {
      Cars.push({ carId: car.id, ...car.data() });
    });
    return Cars;
  };