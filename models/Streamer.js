import mongoose from 'mongoose';

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
  links: [LinkSchema],
});

module.exports =
  mongoose.models.Streamer || mongoose.model('Streamer', StreamerSchema);
