const db = require('../utils/DBHelper')
const getUnCheckedOrders = num => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select orders.*, address.address from orders left join address on address.id = orders.addressId where state='待接单' order by startTime desc limit 0, ${num}`
			console.log(sql)
			cn.query(sql, null, (err, rs) => {
				if (err) throw err
				resolve(rs)
			})
		})
	})
}
const currentOrder = orders => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			let sql = ''
			let ids = []
			if (err) throw err
			for (let i = 0; i < 2; i++) {
				let order = orders[i]
				if (order) {
					ids.push(order.id)
				}
				sql = `update orders set state = '当前订单' where id = ? || id = ?`
			}
			cn.query(sql, ids, (err, rs) => {
				if (err) throw err
				resolve(rs)
			})
		})
	})
}

const completeOrder = (order, OID) => {
	console.log('complete', OID)
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `update orders set state = '已完成', toId = '${OID}' where id = ?`
			cn.query(sql, order.id, (err, rs) => {
				if (err) throw err
				resolve(rs)
			})
		})
	})
}

const getCurrentOrders = OID => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from orders where state = '当前订单' and toId = ?`
			cn.query(sql, OID, (err, rs) => {
				if (err) throw err
				resolve(rs)
			})
		})
	})
}

const addOrder = order => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `insert into orders set ?`
			cn.query(sql, order, (err, rs) => {
				if (err) throw err
				resolve(rs)
			})
		})
	})
}

const getAddress = id => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from address where id = ?`
			cn.query(sql, id, (err, rs) => {
				if (err) throw err
				resolve(rs)
			})
		})
	})
}

let s = {
	getUnCheckedOrders,
	currentOrder,
	completeOrder,
	getCurrentOrders,
	addOrder,
	getAddress
}

module.exports = s