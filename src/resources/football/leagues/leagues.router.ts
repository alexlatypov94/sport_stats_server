import express from 'express';
import leaguesService from './leagues.service';

const router = express.Router();

router.get('/leagues', async (_req, res) => {
  try {
    const leagues = await leaguesService.getAllLeagues();
    res.status(200).json(leagues);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/leagues/:id', async (req, res) => {
  try {
    const league = await leaguesService.getLeagueById(req.params.id);
    res.status(200).json(league);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/leagues', async (req, res) => {
  try {
    const league = await leaguesService.createLeague(req.body);
    res.status(200).json(league);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/leagues/:id', async (req, res) => {
  try {
    const updatedLeague = await leaguesService.updateLeague(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedLeague);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/leagues/:id', async (req, res) => {
  try {
    const deletedLeague = await leaguesService.deleteLeague(req.params.id);
    res.status(200).json(deletedLeague);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
