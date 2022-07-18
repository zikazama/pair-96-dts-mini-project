import ButtonTransparant from "../components/ButtonTransparant";
import ProfileImage from "../components/ProfileImage";
import ProfileImageOther from "../components/ProfileImageOther";

function ProfileLayout() {
  return (
    <>
      <div className="text text-[64px] font-normal">Who’s watching?</div>
      <div className="flex justify-center">
        <ProfileImage
          src="https://gcdnb.pbrd.co/images/uxFfnRgvbB8K.png?o=1"
          title="Murat"
          className="w-[200px] h-[200px]"
        />
        <ProfileImage
          src="https://gcdnb.pbrd.co/images/OcF80a1T1l8Y.png?o=1"
          title="Umut"
          className="w-[200px] h-[200px]"
        />
        <ProfileImage
          src="https://gcdnb.pbrd.co/images/nmahgxeBJL8b.png?o=1"
          title="Kemal"
          className="w-[200px] h-[200px]"
        />
        <ProfileImage
          src="https://gcdnb.pbrd.co/images/3042R6fUBnpM.png?o=1"
          title="Çocuk"
          className="w-[200px] h-[200px]"
        />
        <ProfileImageOther className="w-[200px] h-[200px]" />
      </div>
      <ButtonTransparant value="MANAGE PROFILE" />
    </>
  );
}

export default ProfileLayout;
