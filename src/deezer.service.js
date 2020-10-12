const jsonp = require("jsonp");
const queryString = require("query-string");

// limit
const limit = 2000;

// batch length
exports.batchLength = 50;

// access token
let access_token;
exports.setAccessToken = accessToken => {
  access_token = accessToken;
};

// get artists
exports.getArtists = async () => {
  const { data } = await dzrApi("user/me/artists", { limit });
  return data;
};

// get artists releases
exports.getArtistsReleases = async artists => {
  // Build API Batch call
  const methods = JSON.stringify(
    artists.map(artist => {
      return {
        relative_url: `artist/${artist.id}/albums`,
        params: { limit }
      };
    })
  );
  const { batch_result } = await dzrApi("batch", { methods });
  return batch_result;
};

// Deezer API call
const dzrApi = async (path, params) => {
  // Deezer base api URL
  const baseUrl = "https://api.deezer.com/";
  // Base query parameters
  const baseQuery = {
    access_token,
    output: "jsonp"
  };
  // Call
  return new Promise((resolve, reject) => {
    jsonp(
      `${baseUrl}${path}?${queryString.stringify({
        ...baseQuery,
        ...params
      })}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
