require("dotenv").config();
// const app = require("./bin/app");
const app = require("./src/app/app")

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App Running On : http://localhost:${port}`);
});
