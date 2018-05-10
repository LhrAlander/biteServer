const server = require('../server/orderServer')
const getUncheckedOrders = async (req, res, next) => {
	try {
		let { needLength, OID } = req.body
		let orders = await server.getUnCheckedOrders(needLength)
		let SID = users[OID]
		console.log(global.users, SID)
		io.to(SID).emit('newOrders', {
			orders: orders.data
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