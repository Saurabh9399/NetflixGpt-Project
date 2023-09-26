import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieID }) => {
  //fetch trailer
  const trailerVideo = useMovieTrailer(movieID);

  console.log(trailerVideo);

  return (
    <div className="-mt-[6.5rem]">
      <iframe
        className="w-screen aspect-video object-contain"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&amp;controls=0"
        }
        title="YouTube video player"
        allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
