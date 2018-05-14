const server = require('../server/orderServer')
const pushOrder = async (req, res, next) => {
	try {
		let fromIDS = {
			wyq: `oEwij0-ryS8R56w2xWriEFaKejiU`,
			wd: `oEwij06p7u8GpwVw6NSk7xWZ2dIU`
		}
		let toIDS = {
			wj: `oEwij06DcL-vVQlbvDqtRq9Bhzv0`,
			lhr: `oEwij0z6VEeRMKKCN21nEaOQgThM`
		}
		let fid = Math.random() > 0.5 ? fromIDS.wyq : fromIDS.wd
		// let o = {
		// 	state: '代接单',
		// 	detail: `{"废报纸":12,"废纸板":20}`,
		// 	fromId: fid,
		// 	address: '喆喆喆喆那那那那那',
		// 	startTime: '2018-01-02 12:21:00'
		// }
		let o = req.body.order
		let OID
		let SID
		console.log(global.users)
		if (o.fromId == fromIDS.wd) {
			console.log('韦导')
			OID = toIDS.lhr
		}
		else {
			console.log('无忌')
			OKD = toIDS.wj
		}
		console.log(OID)
		SID = users[OID]
		console.log('即将发送啦', SID)
		let values = await server.addOrder(o)
		let address = await server.getAddress(o.addressId)
		console.log('add', address)
		o.address = address[0].address
		res.send(values)
		io.sockets.to(SID).emit('newOrders', {
			orders: o
		})
	}
	catch (err) {
		console.log(err)
	}
}


let c = {
	pushOrder
}

module.exports = c