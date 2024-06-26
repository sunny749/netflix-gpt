export const NetflixLogo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BackGroundImg="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const User_Avatar='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp'

export const Api_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

  export const IMG_CDN_FOR_BACKGROUND='https://image.tmdb.org/t/p/original'

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hi", name: "हिन्दी" },
    { identifier: "ma", name: "മലയാളം" },
    { identifier: "ta", name: "தமிழ்" },
    { identifier: "te", name: "తెలుగు" },
  ];

  export const GEMINI_AI_KEY=process.env.REACT_APP_GEMINI_API_KEY

  