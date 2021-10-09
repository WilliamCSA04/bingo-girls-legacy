import { mongo } from '../../lib';
import { Streamer } from '../../models';

export default async function handler(req, res) {
  const { method } = req;
  await mongo.connect();
  if (method === 'GET') {
    try {
      const streamers = await Streamer.find({});
      res.status(200).json(streamers);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  return res.status(404);
}
