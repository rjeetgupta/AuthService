import app from "./app";
import {PORT} from "./config/serverConfig.js"

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

startServer()