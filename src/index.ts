import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.listen(3001, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao contectar com db'));



