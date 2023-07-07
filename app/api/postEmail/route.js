import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server';
export async function POST(req){
    // return new NextResponse(req.body)
    const { name, email, phone, typeofProject, deadline, desc } = await req.json()
    try {        
        let data = {
            name ,
            email ,
            phone ,
            typeofproject : typeofProject ,
            deadline ,
            desc 
        };

        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email,
                pass: process.env.PassCode
            }
        });
        let info = await transporter.sendMail({
            from: `${process.env.Email}`,
            to:`${data.email}`, 
            subject:"🖋️ Thank you for reaching out! We'll be in touch soon!",
            text:`Dear ${data.name},
            
Thank you for considering our calligraphy services! 🎉 We are thrilled to receive your inquiry and can't wait to bring your vision to life. Your request has been successfully received through our website's form, and we truly appreciate the opportunity to work with you.
            
Rest assured that our team of passionate and creative calligraphers is ready to infuse your project with energy and enthusiasm! 🌟 We understand the importance of every detail and strive to provide you with the best service possible.
            
Here's a summary of the information you provided:
            
    📋 Type of Project  :   ${data.typeofproject}
    ⏰ Deadline          :     ${data.deadline}
    📝 Description      :   ${(data.desc!==''?data.desc:'None')}
            
We want to assure you that we are diligently reviewing your request and analyzing the specifics of your project. Our calligrapher and owner will personally go through the details to ensure that we fully understand your requirements.
            
In the meantime, if you have any additional thoughts, ideas, or questions, please don't hesitate to reply directly to this email. We value open communication and would be more than happy to address any concerns you may have.
            
Once again, thank you for choosing our calligraphy services. We genuinely appreciate your trust in our creative abilities. We look forward to speaking with you soon and discussing your project further.
            
Best regards,
            
Parul Wadhawan
theperfectpen
🖋️
`
            }).then((info)=>{
                return info.json
            }).then((data)=>{
                return data
            }).catch(err=>{
                return  err;
            })
        let mail = await transporter.sendMail({
            from: `${process.env.Email}`,
            to:`${process.env.Email}`, 
            subject:'New Calligraphy Service Inquiry - User Details',
            text:`Dear Parul mam,
            
A new inquiry has been received through our website's contact form. Here are the details provided by the user:

    👤 Name        :   ${data.name}
    📞 Phone Number   :   ${data.phone}
    ✉️ Email      :   ${data.email}
    📋 Type of Project   :   ${data.typeofproject}
    ⏰ Deadline      :   ${data.deadline}
    📝 Description       :   ${(data.desc!==''?data.desc:'None')}

The user expressed interest in our calligraphy services and is eager to discuss their project further. They found us through our website and have entrusted us with bringing their vision to life.

This is an exciting opportunity for us to showcase our creativity and provide the best service possible. We believe our skills and enthusiasm will perfectly complement the user's requirements.

Please take a moment to review the provided details and consider how we can best assist this potential client. If you have any questions or require further information, feel free to reach out to the user directly using the contact information provided above.

We appreciate your prompt attention to this inquiry and look forward to exploring this project further.

Best regards,

theperfectpen
🖋️`
        }).then((info)=>{
            return info.json
        }).then((data)=>{
            return data
        }).catch(err=>{
            return  err;
        })

        return NextResponse.json({message:'Done'},{status:200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'error',error},{status:500});
    }
}