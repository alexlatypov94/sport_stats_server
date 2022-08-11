import { model, Schema } from 'mongoose';

const countrySchema = new Schema({
  id: {
    required: true,
    type: String,
  },
  countryName: {
    required: true,
    type: String,
  },
  leagues: {
    required: false,
    type: [{ type: Object }],
  },
});

export default model('Countries', countrySchema);
