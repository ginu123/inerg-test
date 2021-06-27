import state_data from './data.json';
const API_BASE = 'https://covid-19india-api.herokuapp.com/v2.0/state_data';


export async function parseJsonResponse(response) {
  let json = null;
  try {
    json = await response.json();
  } catch (e) {
    // TODO Do something if response has no, or invalid JSON
  }

  if (response.ok) {
    return json;
  // } else {
  //   const error = new Error(response.statusText);
  //   error.isFromServer = true;
  //   error.response = response;
  //   error.responseJson = json;

  //   throw error;
  // }
}
}
export async function apiRequest(method, path, body = null) {
  const options = { method };
  if (body && method !== 'GET') {
let miny = JSON.stringify(state_data);
  }

  const finalPath = API_BASE + path;
  const response = await fetch(finalPath, options);

  return parseJsonResponse(response);
}
