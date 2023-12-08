const baseUrl = "http://localhost:3030/data/likes";
import * as requests from "../lib/request.js";

export const like = async (photoId) => {
  await requests.post(baseUrl, {
    photoId,
  });
};

export const getPhotoLikes = async (photoId) => {
  const photoLikes = await requests.get(
    `${baseUrl}?where=photoId%3D%22${photoId}%22&distinct=_ownerId&count`
  );
  return photoLikes;
};

export const getIsAlreadyLiked = async (photoId, userId) => {
  const isAlreadyLiked = await requests.get(
    `${baseUrl}?where=photoId%3D%22${photoId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
  return isAlreadyLiked;
};
