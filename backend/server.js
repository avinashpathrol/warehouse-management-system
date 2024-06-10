const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ordersRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/orders', ordersRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
