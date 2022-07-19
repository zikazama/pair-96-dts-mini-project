import SliderContainer from "../components/Slider/SliderContainer";
import SliderTitle from "../components/Slider/SliderTitle";
import SliderRow from "../components/Slider/SliderRow";
import SliderPoster from "../components/Slider/SliderPoster";

function Slider({ movies, title }) {
  return (
    <SliderContainer>
      <SliderTitle>{title}</SliderTitle>
      <SliderRow>
        {movies.map((movie) => (
          <SliderPoster
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </SliderRow>
    </SliderContainer>
  );
}

export default Slider;
