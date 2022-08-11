import express from 'express';
import countryService from './countries.service';

const router = express.Router();

router.get('/countries', async (_req, res) => {
  try {
    const countries = await countryService.getAllCountries();
    res.status(200).json(countries);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/countries/:id', async (req, res) => {
  try {
    const country = await countryService.getCountryById(req.params.id);
    res.status(200).json(country);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/countries', async (req, res) => {
  try {
    const country = await countryService.createCountry(req.body);
    res.status(200).json(country);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/countries/:id', async (req, res) => {
  try {
    const updatedCountry = await countryService.updateCountry(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedCountry);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/countries/:id', async (req, res) => {
  try {
    const deletedCountry = await countryService.deleteCountry(req.params.id);
    res.status(200).json(deletedCountry);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
