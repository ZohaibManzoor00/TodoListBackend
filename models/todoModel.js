const pool = require('../db')

class TodoModel {
    static async getAllTodosFromDB() {
        const SQL = `SELECT * FROM todos`
        const dbResult = await pool.query(SQL)
        return dbResult.rows
    }
    static async createNewTodoFromDB(description) {
        const SQL = `INSERT INTO todos (description) VALUES ($1) RETURNING *`
        const dbResult = await pool.query(SQL, [description])
        return dbResult.rows[0]
    }

    static async deleteTodoFromDB(ID) {
        const SQL = `DELETE FROM todos WHERE id = ($1) RETURNING *`
        const dbResult = await pool.query(SQL, [ID])
        return dbResult.rows[0]
    }

    static async markCompletedFromDB(ID) {
        const SQL = `UPDATE todos SET completed = true WHERE id = ($1) RETURNING *`
        const dbResult = await pool.query(SQL, [ID])
        return dbResult.rows[0]
    }
}

module.exports = TodoModel