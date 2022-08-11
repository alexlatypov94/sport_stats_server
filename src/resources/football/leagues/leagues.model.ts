import { model, Schema } from 'mongoose';

const leagueSchema = new Schema({
  id: {
    required: true,
    type: String,
  },
  leagueName: {
    required: true,
    type: String,
  },
  leagueSize: {
    required: true,
    type: Number,
  },
  teams: {
    required: false,
    type: [{ type: Object }],
  },
});

export default model('Leagues', leagueSchema);
