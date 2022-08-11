import { v4 } from 'uuid';
import leagueModel from './leagues.model';
import countriesModel from '../countries/countries.model';

const getAllLeagues = async () => await leagueModel.find();

const getLeagueById = async (id: string) => await leagueModel.findById(id);

const createLeague = async (leagueData: any) => {
  const { countryName, leagueName, leagueSize } = leagueData;
  const foundedLeague = await leagueModel.findOne({
    leagueName: new RegExp('^' + leagueName +'$', 'i'),
  });
  if(foundedLeague) {
    throw new Error("this league already exists")
  }
  const league = await new leagueModel({ leagueName, leagueSize, id: v4() });
  await countriesModel.findOneAndUpdate(
    {
      countryName,
    },
    {
      $push: {
        leagues: league,
      },
    }
  );
  
  return await league.save();
};

const updateLeague = async (id: string, leagueData: any) => {
  const options = { new: true };
  return await leagueModel.findByIdAndUpdate(id, leagueData, options);
};

const deleteLeague = async (id: string) => leagueModel.findByIdAndDelete(id);

export default {
  getAllLeagues,
  getLeagueById,
  createLeague,
  updateLeague,
  deleteLeague,
};
