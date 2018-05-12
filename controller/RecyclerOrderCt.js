const server = require('../server/orderServer')
const getUncheckedOrders = async (req, res, next) => {
	try {
		console.log('get')
		let { needLength, OID } = req.body
		let orders = await server.getUnCheckedOrders(needLength)
		let SID = users[OID]
		console.log('orders', orders)
		res.status(200).send(orders)
		io.sockets.to(SID).emit('newOrders', {
			orders: orders
		})
	} 
	catch (err) {
		console.log(err)
	}
}


let c = {
	getUncheckedOrders
}

module.exports = c