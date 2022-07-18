import Navbar from "../layouts/Navbar";
import ProfileLayout from "../layouts/ProfileLayout";

function Profile() {
  return (
    <>
      <div className="relative h-full w-full bg-first-dark">
        <Navbar />
        <div className="mx-auto flex h-screen flex-col mt-[3%] text-white">
          <ProfileLayout />
        </div>
      </div>
    </>
  );
}

export default Profile;
