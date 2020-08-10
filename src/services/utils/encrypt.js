const crypto = require('crypto')

const generateSalt = () => {
    return crypto.randomBytes(16).toString("hex")
}

const encryptPassword = (password, salt = generateSalt()) => {
    console.log('marmota', password)
    const encryptedPassword = crypto.pbkdf2Sync(
        password,
        salt,
        100000,
        65,
        'sha512')
    return {
        salt,
        encryptedPassword: encryptedPassword.toString("hex")
    }
}

module.exports = {
    encryptPassword
}