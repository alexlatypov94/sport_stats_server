import { v4 } from 'uuid';
import countriesModel from './countries.model';

const getAllCountries = async () => await countriesModel.find();

const getCountryById = async (id: string) => await countriesModel.findById(id);

const createCountry = async (countryData: any) => {
  const countries = await countriesModel.find();
  if (countries.find((el) => el.countryName === countryData.countryName)) {
    throw new Error('this country already exists');
  }

  const country = new countriesModel({ ...countryData, id: v4() });
  return await country.save();
};

const updateCountry = async (id: string, countryData: any) => {
  const options = { new: true };
  return await countriesModel.findByIdAndUpdate(id, countryData, options);
};

const deleteCountry = async (id: string) =>
  countriesModel.findByIdAndDelete(id);

export default {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
};
