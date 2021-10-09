import mongoose from 'mongoose';

const requiredString = { type: String, required: true };

const LinkSchema = new mongoose.Schema({
  text: requiredString,
  link: requiredString,
});

const StreamerSchema = new mongoose.Schema({
  name: requiredString,
  alternativeText: requiredString,
  backgroundColor: requiredString,
  imageEndpoint: requiredString,
  links: [LinkSchema],
});

module.exports =
  mongoose.models.Streamer || mongoose.model('Streamer', StreamerSchema);
