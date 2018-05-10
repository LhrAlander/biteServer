const server = require('../server/orderServer')
const getUncheckedOrders = async (req, res, next) => {
	try {
		console.log('get')
		let { needLength, OID } = req.body
		let orders = await server.getUnCheckedOrders(needLength)
		let SID = users[OID]
		console.log(orders)
		io.sockets.to(SID).emit('newOrders', {
			orders: orders.data
		})
		res.status(200).send('get')
	} 
	catch (err) {
		console.log(err)
	}
}


let c = {
	getUncheckedOrders
}

module.exports = c