import { model, Schema } from 'mongoose';

const leagueSchema = new Schema({
  id: {
    required: true,
    type: String,
  },
  teamName: {
    required: true,
    type: String,
  },
});

export default model('Teams', leagueSchema);
