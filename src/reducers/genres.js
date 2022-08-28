export default function genres(genres = [], action) {
  switch (action.type) {
    case "FETCH_GENRES": {
      return action.payload;
    }
    default: {
      return genres;
    }
  }
}