const baseUrl = "http://localhost:3030/jsonstore/users";

export const register = async (user) => {
    const body = {
        username: user.username,
        email: user.email,
        password: user.email,
        avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        
    }
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  return result;
};
