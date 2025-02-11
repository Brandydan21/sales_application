import create_app from './server'
import dotenv from 'dotenv'; 


dotenv.config();  // Load environment variables from .env file 

const PORT = process.env.PORT || 4000;

const app = create_app()

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
