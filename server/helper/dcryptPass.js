import bcrypt from 'bcryptjs'

const DcryptPassword = async (password, hashPass) => {
    const decodePass = await bcrypt.compare(password, hashPass)
    return decodePass
}

export default DcryptPassword