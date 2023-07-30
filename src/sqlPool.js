const sql = require('mssql')

async function getData() {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=169.254.254.216,1433;Database=master;Encrypt=true;Trusted_Connection=true;trustServerCertificate=true;');
        const result = await sql.query`select * from items`
        console.dir(result)
        console.log(result)
    } catch (err) {
        console.log(err)
        // ... error checks
    }
}

// Call the async function
getData();

module.exports = getData;
