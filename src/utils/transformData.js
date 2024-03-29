import {randomNumber} from "./randomNumber";

export const transformData = (data) => {
  return {
    id: data.id,
    name: data.name,
    img: data["background_image"],
    genres: data.genres,
    rating: data.rating,
    ratingsCount: data["ratings_count"],
    released: data.released,
    description: data?.description_raw,
    slug: data.slug,
    price: randomNumber(1200, 3500),
    totalCount: 0
  };
};

export const transformDataItem = (data) => {
  return {
    ...transformData(data),
    preview: data.preview,
    platforms: data.platforms,
    reddit: data["reddit_url"],
    website: data.website,
    developers: data.developers,
  };
};

export const getName = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
  };
};
