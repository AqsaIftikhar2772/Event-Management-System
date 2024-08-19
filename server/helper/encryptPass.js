import bcrypt from 'bcryptjs'

const EncryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)
    return hashedpassword
}

export default EncryptPassword