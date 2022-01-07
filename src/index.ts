import cors from 'cors';
import express from 'express';
import { CommonRoutesConfig } from './common/routes'
import { RentalsRoutes } from './components/rentals/routes'

const app = express();
const port = 8080;

const routes: Array<CommonRoutesConfig> = [];

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send(`GET request to homepage \n Hello World its a new node app!!`);
});

routes.push(new RentalsRoutes(app));

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
