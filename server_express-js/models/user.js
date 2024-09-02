const db = require('../config/config');
const bcrypt = require('bcryptjs');
const User = {};

User.findById = (id, result) => {
    const sql = `SELECT id, email, name, lastname, image, password FROM users WHERE id = ?`;
    db.query(sql, [id], (err, user) => {
        if (err) {
            console.log('Error al consultar: ', err);
            result(err, null);
        } else {
            console.log('Usuario consultado: ', user[0]);
            result(null, user[0]);
        }
    });
};


User.findByEmail = (email, result) => {
    const sql = `SELECT id, email, name, lastname, image, phone, password FROM users WHERE email = ?`;
    db.query(sql, [email], (err, user) => {
        if (err) {
            console.log('Error al consultar:', err);
            result(err, null);
        } else {
            console.log('Usuario consultado: ', user[0]);
            result(null, user[0]);
        }
    });
};

User.create = async (user, result) => {
    try {
        const hash = await bcrypt.hash(user.password, 10);
        const sql = `
            INSERT INTO users(
                email,
                name,
                lastname,
                phone,
                image,
                password,
                created_at,
                update_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(
            sql,
            [
                user.email,
                user.name,
                user.lastname,
                user.phone,
                user.image,
                hash,
                new Date(),
                new Date()
            ],
            (err, res) => {
                if (err) {
                    console.log('Error al crear usuario: ', err);
                    result(err, null);
                } else {
                    console.log('Usuario nuevo creado', { id: res.insertId, ...user });
                    result(null, { id: res.insertId, ...user });
                }
            }
        );
    } catch (err) {
        console.log('Error al encriptar la contraseña: ', err);
        result(err, null);
    }
};

module.exports = User;