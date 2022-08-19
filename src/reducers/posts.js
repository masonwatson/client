/* eslint  import/no-anonymous-default-export: off */

export default function posts (posts=[], action) {
  switch (action.type) {
    case "FETCH_ALL": {
      return action.payload;
    }
    case "CREATE": {
      return [...posts, action.payload];
    }
    default:
      return posts;
  }
}