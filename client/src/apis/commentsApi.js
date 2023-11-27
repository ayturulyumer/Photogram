const baseUrl = "http://localhost:3030/data/comments";
import * as requests from "../lib/request.js"

export const create = async (photoId, text,username,userAvatar) => {

    const newComment = await requests.post(baseUrl, {
      photoId,
      text,
      username,
      userAvatar
    });
  
    return newComment;
  };

export const getAll = async (photoId) => {
    const query = new URLSearchParams({
      where: `photoId="${photoId}"`,
      load: `owner=_ownerId:users`,
    });
    const comments = await requests.get(`${baseUrl}?${query}`);
    return comments;
  };

  