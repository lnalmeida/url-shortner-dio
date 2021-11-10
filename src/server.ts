import app from '.';

const port = process.env.NODE_ENV == 'production' ? parseInt(process.env.PORT) : 3333;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });