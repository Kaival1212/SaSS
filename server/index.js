const express = require('express');
const app = express();
const port = 8080;

const orderEndpoint = require("./supabase/orders")


app.use("/supabase/orders" , orderEndpoint);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
