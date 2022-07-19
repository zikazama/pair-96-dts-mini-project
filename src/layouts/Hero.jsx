import HeroContainer from "../components/Hero/HeroContainer";
import HeroTitle from "../components/Hero/HeroTitle";
import HeroDescription from "../components/Hero/HeroDescription";
import HeroButton from "../components/Hero/HeroButton";

function Hero({ movie }) {
  console.log(movie);
  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;
