import appExpress from 'express'
import cors from 'cors'

const app = appExpress();
import routes from '../src/routes' ;
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(appExpress.json());
app.use(routes);
app.set('PORT', PORT);

export default app;