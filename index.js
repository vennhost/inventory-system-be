const server = require("express")

const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})