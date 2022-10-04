import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function UserProfile() {
  const [canEditAccount, setCanEditAccount] = useState(false);
  const [canDeleteAccount, setCanDeleteAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

//   const history = useHistory();

  function toggleEditProfile() {
    setCanEditAccount(!canEditAccount);
  }

  function toggleDeleteProfile() {
    setCanDeleteAccount(!canDeleteAccount);
  }

  // const reviewsByCurrentUser = reviews.filter((review) => {
  //   return review.user_id === currentUser.id;
  // });


  // function handleNameChange(event) {
  //   setUsername(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }

  // function handleAvatarChange(event) {
  //   setAvatar(event.target.value);
  // }

  // async function handleUpdateAccount(e) {
  //   e.preventDefault();

  //   const formData = {
  //     username,
  //     avatar,
  //     password,
  //     email: "putridpotatoesdummyuser@gmail.com",
  //   };

  //   const response = await fetch(
  //     `${process.env.REACT_APP_RAILS_URL}/users/${currentUser.id}`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     }
  //   );
  //   const jsonify = await response.json();
  //   onUpdateUserInfo(jsonify);
  //   // history.push("/profile");
  //   setAvatar("");
  //   setUsername("");
  //   setPassword("");
  //   toggleEditProfile();
  // }

  // function handleDeleteAccount() {
  //   fetch(`${process.env.REACT_APP_RAILS_URL}/users/${currentUser.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setCurrentUser(null);
  //   // history.push("/");
  // }

  return (
    // <div>
    //   <img
    //     className="profile-pic"
    //     src={currentUser.avatar}
    //     alt="profile-logo"
    //   ></img>
    //   <h1 className="profile-username">{currentUser.username}</h1>
    //   <button className="edit-account-button" onClick={toggleEditProfile}>
    //     EDIT PROFILE
    //   </button>
    //   {canEditAccount ? (
    //     <div className="profile-modal-content">
    //       <div className="profile-modal-header">
    //         <span className="profile-close" onClick={toggleEditProfile}>
    //           &times;
    //         </span>
    //         <h2>Edit Your Profile</h2>
    //       </div>
    //       <div className="profile-modal-body">
    //         <form onSubmit={handleUpdateAccount}>
    //           <input
    //             type="text"
    //             name="username"
    //             value={username}
    //             placeholder="New Username..."
    //             onChange={handleNameChange}
    //           />
    //           <br></br>
    //           <input
    //             type="password"
    //             name="password"
    //             value={password}
    //             placeholder="New Password..."
    //             onChange={handlePasswordChange}
    //           />
    //           <br></br>
    //           <input
    //             type="text"
    //             name="avatar"
    //             value={avatar}
    //             placeholder="New Avatar..."
    //             onChange={handleAvatarChange}
    //           />
    //           <br></br>
    //           <input
    //             className="edit-profile-submit"
    //             type="submit"
    //             value="Submit"
    //           />
    //         </form>
    //         <button
    //           className="delete-profile-submit"
    //           onClick={toggleDeleteProfile}
    //         >
    //           {canDeleteAccount ? "I would Never!" : "Delete Account"}
    //         </button>
    //         {canDeleteAccount ? (
    //           <div className="confirm-delete">
    //             <h2>Are you SURE you want to delete your account???</h2>
    //             <button onClick={handleDeleteAccount}>
    //               Yes, I'd like to be banished to the shadow realm
    //             </button>
    //           </div>
    //         ) : null}
    //       </div>
    //     </div>
    //   ) : null}
    <>
      Hello from the UserProfile |
    </>
  );
}

export default UserProfile;