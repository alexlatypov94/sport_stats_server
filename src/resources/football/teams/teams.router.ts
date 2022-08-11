import express from 'express';
import teamsService from './teams.service';

const router = express.Router();

router.get('/teams', async (_req, res) => {
  try {
    const teams = await teamsService.getAllLeagues();
    res.status(200).json(teams);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/teams/:id', async (req, res) => {
  try {
    const team = await teamsService.getLeagueById(req.params.id);
    res.status(200).json(team);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/teams', async (req, res) => {
  try {
    const team = await teamsService.createLeague(req.body);
    res.status(200).json(team);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/teams/:id', async (req, res) => {
  try {
    const updatedTeam = await teamsService.updateLeague(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedTeam);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/teams/:id', async (req, res) => {
  try {
    const deletedTeam = await teamsService.deleteLeague(req.params.id);
    res.status(200).json(deletedTeam);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
