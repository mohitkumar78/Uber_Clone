import http from 'http'
import app from './app.js'
import Db_Connect from './DB/db.js';
const port = 4000
const server = http.createServer(app);

server.listen(port, () => {
    Db_Connect();
    console.log(`server is running on port${port}`)
})