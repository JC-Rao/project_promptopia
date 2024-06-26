import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const {userId, prompt, tag } = await req.json();
    
    try {

    //we have to do connectToDB() every time because this is a Lambda function meaning 
    //it's going to die once it does its job.
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), {status:201})

    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500});
    }
}