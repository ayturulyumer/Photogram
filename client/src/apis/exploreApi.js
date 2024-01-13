import { createClient } from 'pexels';

const client = createClient('WXxy0Xfe6x6OulNE3yvVYpeuYLAPtgCBIxQoG2aIQ9xnzqjltEKXdXqn');





export const getPhotos = async (query) => {
   const result = await client.photos.search({ query, per_page:32, });
   return result
}