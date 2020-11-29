import {
  fetchGet,
  fetchPatch,
  fetchPost,
  fetchDelete
} from "../utils/fetchMethods";
import config from "../../config";

export const createHandler = async (route, body) => {
  const uri = `${config.apiBaseUrl}/${route}/`;
  const response = await fetchPost({ uri, body });
  return response;
};

export const deleteHandler = async (route, id) => {
  const uri = `${config.apiBaseUrl}/${route}/${id}`;
  return fetchDelete({ uri });
};

export const getAllHandler = async route => {
  const uri = `${config.apiBaseUrl}/${route}`;
  return fetchGet({ uri });
};

export const getAuthHandler = async (route, token) => {
  const uri = `${config.apiBaseUrl}/${route}/`;
  return fetchGet({ uri, token });
};

export const getHandler = async (route, id) => {
  const uri = `${config.apiBaseUrl}/${route}/${id}`;
  return fetchGet({ uri });
};

export const updateHandler = async (route, id) => {
  const uri = `${config.apiBaseUrl}/${route}/${id}`;
  return fetchPatch({ uri });
};
