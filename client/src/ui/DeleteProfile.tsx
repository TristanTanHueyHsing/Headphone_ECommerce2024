import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, deleteUser } from 'firebase/auth';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import Container from './Container';
import { FirebaseError } from 'firebase/app';
import toast from "react-hot-toast";

const DeleteProfile = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const db = getFirestore();

    const handleDelete = async () => {

        try {
            const user = auth.currentUser;
            console.log("Initiating account deletion for user:", user);

            if (user) {
                // Reference to the user's document in the 'users' collection using the user's UID
                const userDocRef = doc(db, 'users', user.uid);
                console.log("Attempting to delete user document in Firestore:", user.uid);

                // Delete the user's document
                await deleteDoc(userDocRef);
                console.log("User document deleted from Firestore.");

                // Proceed to delete the user from Firebase Authentication
                await deleteUser(user);
                console.log("User account deleted from Firebase Authentication.");

                toast.success(`Account deleted successfully`);
                navigate('/');  // Navigate to home or login page after deletion
            } else {
                console.warn("No user is currently signed in.");
            }
        } catch (error) {
            const firebaseError = error as FirebaseError;
            console.error("Error deleting account:", firebaseError.code, firebaseError.message);
            toast.error(`Failed to delete account`);
        }
    };


    const handleCancel = () => {
        console.log("Cancel deletion. Navigating back to the previous page.");
        navigate(-1); // Go back to the previous page
    };

    return (
        <Container>
            <div className="bg-gray-950 rounded-lg p-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Are you sure?</h2>
                <p className="text-sm text-red-500 mt-2">
                                    *To delete account you need to be recently signed in. If change fails please log in again.
                                </p><br/>
                <div className="space-x-4">
                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg text-xl"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg text-xl"
                    >
                        No
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default DeleteProfile;
