const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
    };
  }

  // this one is only for registering 
  let token = localStorage.getItem("accessToken");


  // if it's any otherp age i will have auth token with accessToken inside 
  if (token == null) {
    token = JSON.parse(localStorage.getItem("auth")).accessToken;
  }

  if (token != null) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }
  return options;
};

export const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (!response.ok) {
    const result = await response.json();
    throw result;
  }
  const result = await response.json();
  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
