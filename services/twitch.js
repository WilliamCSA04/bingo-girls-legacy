const BASE_URL = process.env.TWITCH_API_BASE_URL;
const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const ACCESS_TOKEN = process.env.TWITCH_APP_ACCESS_TOKEN;

const defaultHeaders = {
  authorization: `Bearer ${ACCESS_TOKEN}`,
  client_id: CLIENT_ID,
};

async function request(endpoint, init = {}) {
  if (endpoint) {
    throw new Error('Missing endpoint that is required');
  }
  return fetch(endpoint, {
    ...init,
    headers: { ...defaultHeaders, ...init.headers },
  });
}

export async function getUsers({ logins = [] }) {
  const url = `${BASE_URL}/users`;
  const endpoint = logins.reduce((finalURL, login, index) => {
    let appendURL = finalURL;
    if (!index) {
      appendURL = url.concat('?');
    } else {
      appendURL = appendURL.concat('&');
    }
    return appendURL.concat(`login=${login}`);
  }, '');
  const res = await request(endpoint);
  return res;
}
