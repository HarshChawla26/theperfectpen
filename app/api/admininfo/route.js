import {connectDB} from '@utils/database';
import userDB from '@models/admin'
import { NextResponse } from 'next/server';


export async function POST(req){
    
    const body = await req.json();
    await connectDB();

    try {
        await userDB.create(body);
        
        // await user.save()    
        
        return NextResponse.json({message:'User signed in',user},{status:200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Server error'},{status:500});
    }
}

export async function GET(req){
    connectDB();
    
    const users = userDB.find({});
    
    return new Response('users');
}