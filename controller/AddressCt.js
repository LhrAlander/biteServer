const server = require('../server/addressServer')


const getAllAddresses = async (req, res, next) => {
	try {
		console.log('getAll')
		server.getAllAddresses().then(v => {
			console.log(v)
		})
		res.status(200).send(rs)
	} 
	catch (err) {
		console.log(err)
	}
}

let c = {
	getAllAddresses
}

module.exports = c