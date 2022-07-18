function ProfileImage({ src, title, className }) {
  return (
    <div className="flex flex-col mt-[51px] ml-[25px] mr-[25px]">
      <img src={src} alt="Profile" className={className} />
      <span className="text-second-dark mt-[21px] text-[26px]">{title}</span>
    </div>
  );
}

export default ProfileImage;
