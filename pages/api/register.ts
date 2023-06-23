import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import prisma from "../../lib/prismadb"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'})
    }
    try {
        const { email, username, name, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                email,
                username,
                name,
               hashedPassword
            }
        })
        return res.status(200).json({user})
    }catch(err) {
        console.log(err)
        return res.status(400).json({message: 'Bad request'})
    }
    
}