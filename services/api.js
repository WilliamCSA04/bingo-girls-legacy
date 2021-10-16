const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getStreamers() {
  const res = await fetch(`${API_URL}/streamers`);
  const data = await res.json();
  return data;
}
