import { PORT, MONGO_CONNECTION_STRING } from './common/config';
import mongoose from 'mongoose';

import app from './app';

mongoose.connect(MONGO_CONNECTION_STRING as string);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
