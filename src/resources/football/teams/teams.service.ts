import { v4 } from 'uuid';
import leaguesModel from '../leagues/leagues.model';
import teamModel from './teams.model';

const getAllLeagues = async () => await teamModel.find();

const getLeagueById = async (id: string) => await teamModel.findById(id);

const createLeague = async (teamData: any) => {
  const { teamName, leagueName } = teamData;
  const team = await teamModel.findOne({
    teamName: new RegExp('^' + teamName + '$', 'i'),
  });
  if (team) {
    throw new Error('this team already exists');
  }
  const createdTeam = new teamModel({ teamName, id: v4() });
  const updatedLeague = await leaguesModel.findOneAndUpdate(
    {
      leagueName,
    },
    {
      $push: {
        teams: createdTeam,
      },
    }
  );

  console.log(updatedLeague);

  return await createdTeam.save();
};

const updateLeague = async (id: string, teamData: any) => {
  const options = { new: true };
  return await teamModel.findByIdAndUpdate(id, teamData, options);
};

const deleteLeague = async (id: string) => teamModel.findByIdAndDelete(id);

export default {
  getAllLeagues,
  getLeagueById,
  createLeague,
  updateLeague,
  deleteLeague,
};
