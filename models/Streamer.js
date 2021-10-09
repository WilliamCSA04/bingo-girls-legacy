import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
const requiredString = { type: String, required: true };

const LinkSchema = new mongoose.Schema({
  text: requiredString,
  link: requiredString,
});

const StreamerSchema = new mongoose.Schema({
  name: requiredString,
  alternative_text: requiredString,
  background_color: requiredString,
  image_endpoint: requiredString,
  uuid: { type: String, default: () => uuidv4() },
  links: [LinkSchema],
});

module.exports =
  mongoose.models.Streamer || mongoose.model('Streamer', StreamerSchema);
