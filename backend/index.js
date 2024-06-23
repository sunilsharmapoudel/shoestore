import { app } from './app.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => app.listen(PORT, () => console.log(`server is up and running ${PORT}`)))

app.listen(4000, () => console.log("Server is up and running"));