const server = require('../server/addressServer')


const getAllAddresses = async (req, res, next) => {
	try {
		server.getAllAddresses().then(v => {
			console.log('get')
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

let c = {
	getAllAddresses
}

module.exports = c