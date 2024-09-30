import connectDB from './db/index.js';
import app from './app.js';

connectDB()
    .then(() => {
        app.on('error', (err) => {
            console.log('App Error: ', err);
            throw err;
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running at port: ${process.env.PORT || 8000}`
            );
        });
    })
    .catch((err) => {
        console.log('MongoDB Connection Failed', err);
    });