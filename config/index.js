import dotenv from 'dotenv';

dotenv.config();

const config = {
    api: {
        weather: process.env.API_KEY
    }
}

export default config;
