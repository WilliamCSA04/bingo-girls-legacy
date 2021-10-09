import { mongo } from '../../lib';
import { Streamer } from '../../models';

export default async function handler(req, res) {
  const { method } = req;
  await mongo.connect();
  if (method === 'GET') {
    try {
      const streamers = await Streamer.find({});
      if (!streamers.length) {
        return res.status(502).json({ message: 'Missing DB info' });
      }
      return res.status(200).json(streamers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  return res.status(404);
}
