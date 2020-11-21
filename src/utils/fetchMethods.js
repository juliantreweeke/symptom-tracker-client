const fetchMethod = method => async ({ body, uri }) => {
  const requestOptions = {
    method,
    ...(method === "POST" && body && { body: JSON.stringify(body) }),
    headers: { "Content-Type": "application/json" }
  };

  try {
    const fetchResponse = await fetch(uri, requestOptions);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const fetchGet = fetchMethod("GET");
export const fetchPost = fetchMethod("POST");
export const fetchPatch = fetchMethod("PATCH");
export const fetchDelete = fetchMethod("DELETE");
