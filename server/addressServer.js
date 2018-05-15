const db = require('../utils/DBHelper')
const getAllAddresses = () => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from address`
			console.log(sql)
			cn.query(sql, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

let s = {
	getAllAddresses
}

module.exports = s