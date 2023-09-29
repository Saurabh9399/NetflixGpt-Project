export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTJmYzhmNWI0NjhjMzE5NDNhOWVkZWYwMmU0ZDVkYyIsInN1YiI6IjY1MTE0ZWMwMzQ0YThlMDk2ZTZkZGYzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1xWuj3ToJoR1qg05OqM81Ilc6CURjG7M4MFTknL8IjU",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

console.log("env...", process.env, process.env.REACT_APP_OPENAI);

export const OPENAI_KEY = "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";
