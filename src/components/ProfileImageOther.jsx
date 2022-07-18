function ProfileImageOther({ className }) {
  return (
    <div className="flex flex-col mt-[51px] ml-[25px] mr-[25px]">
      <img
        src="https://gcdnb.pbrd.co/images/xRlV9CkibXRU.png?o=1"
        alt="Profile"
        className={className}
      />
      <span className="text-second-dark mt-[21px] text-[26px]">Other</span>
    </div>
  );
}

export default ProfileImageOther;
