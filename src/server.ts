import app from '.';

const port = process.env.PORT || 3126;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });