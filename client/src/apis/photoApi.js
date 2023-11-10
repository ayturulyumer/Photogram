const baseUrl = "http://localhost:3030/jsonstore/photos";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  const data = Object.values(result);
  return data;
};

export const getSingle = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const result = await response.json();
  return result;
};
