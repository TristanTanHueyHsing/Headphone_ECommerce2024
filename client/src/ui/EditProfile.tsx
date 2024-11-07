import { useEffect, useState } from "react";
import Label from "./Label";
import { MdPhotoLibrary } from "react-icons/md";
import { auth, db } from "../lib/firebase";
import upload from "../lib/upload";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import Container from "./Container";

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
}

const EditProfile = () => {
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [userData, setUserData] = useState<UserData>({
        firstName: "",
        lastName: "",
        email: "",
        avatarUrl: "",
    });
    const [avatar, setAvatar] = useState({
        file: null as File | null,
        url: "",
    });
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                try {
                    // Get email from Firebase Authentication
                    const authEmail = auth.currentUser.email;

                    const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
                    if (userDoc.exists()) {
                        const data = userDoc.data() as UserData;
                        setUserData({
                            ...data,
                            email: authEmail ?? data.email, // Ensure email from auth is used
                        });
                        setAvatar({ ...avatar, url: data.avatarUrl ?? "" });
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setErrMsg("An error occurred while fetching your data.");
                }
            } else {
                setErrMsg("User not signed in. Please sign in to edit your profile.");
            }
        };

        fetchUserData();
    }, []);

    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const { firstName, lastName, email } = Object.fromEntries(formData);

        if (!auth.currentUser) {
            setErrMsg("User not signed in. Please sign in to update your profile.");
            return;
        }

        try {
            setLoading(true);
            let imageUrl = userData.avatarUrl;

            if (avatar.file) {
                imageUrl = await upload(avatar.file) as string;
            }

            // Re-authenticate if email or password is being updated
            if (email !== auth.currentUser.email || passwords.newPassword) {
                const credential = EmailAuthProvider.credential(
                    auth.currentUser.email!,
                    passwords.currentPassword
                );
                await reauthenticateWithCredential(auth.currentUser, credential);
            }

            // Update the email if it has changed
            if (email !== auth.currentUser.email) {
                await updateEmail(auth.currentUser, email as string); // Update email in Firebase Authentication
                setErrMsg("Email updated successfully!");
            }

            // Update Firestore user data
            await updateDoc(doc(db, "users", auth.currentUser.uid), {
                firstName,
                lastName,
                email,
                avatarUrl: imageUrl,
                avatar: imageUrl,
            });

            // Update password if provided
            if (passwords.newPassword && passwords.currentPassword) {
                if (passwords.newPassword !== passwords.confirmPassword) {
                    setErrMsg("New passwords do not match.");
                    return;
                }
                await updatePassword(auth.currentUser, passwords.newPassword);
                setErrMsg("Profile and password updated successfully!");
            } else {
                setErrMsg("Profile updated successfully!");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setErrMsg("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Container>
            <div className="bg-gray-950 rounded-lg">
                <form
                    onSubmit={handleProfileUpdate}
                    className="max-w-5xl mx-auto pt-10 px-10 lg:px-0 text-white"
                >
                    <div className="border-b border-b-white/10 pb-5">
                        <h2 className="text-lg font-semibold uppercase leading-7">
                            Edit Information
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                            Use this page to edit your particulars
                        </p>
                    </div>
                    <div className="border-b border-b-white/10 pb-5">
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label title="First name" htmlFor="firstName" />
                                <input
                                    type="text"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label title="Last name" htmlFor="lastName" />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                                />
                            </div>
                            <div className="sm:col-span-4">
                                <Label title="Email address" htmlFor="email" />
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                                />
                                <p className="text-sm text-red-500 mt-2">
                                    *To change email you need to be recently signed in. If change fails please log in again.
                                </p>
                            </div>
                            <div className="col-span-full">
                                <Label title="Current Password" htmlFor="currentPassword" />
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={passwords.currentPassword}
                                    onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <Label title="New Password" htmlFor="newPassword" />
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwords.newPassword}
                                    onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <Label title="Confirm New Password" htmlFor="confirmPassword" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwords.confirmPassword}
                                    onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                                />
                            </div>
                            <div className="col-span-full">
                                <Label title="Cover photo" />
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-4">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 border border-gray-600 rounded-full p-1">
                                            {avatar?.url ? (
                                                <img
                                                    src={avatar.url}
                                                    alt="userImage"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            ) : (
                                                <MdPhotoLibrary className="mx-auto h-full w-full text-gray-500" />
                                            )}
                                        </div>
                                        <div className="mt-4 flex items-center mb-1 text-sm leading-6 text-gray-400">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md font-semibold text-skyText focus-within:outline-none"
                                            >
                                                <span>Upload an image</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleAvatar}
                                                    className="sr-only"
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-400">PNG, JPG, up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6 pb-5">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-md bg-skyText px-5 py-2 text-sm font-semibold text-gray-950 shadow-sm hover:bg-skyHover hover:text-white"
                        >
                            {loading ? "Updating..." : "Update profile"}
                        </button>
                        <p className="text-skyText font-semibold text-sm">{errMsg}</p>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default EditProfile;
