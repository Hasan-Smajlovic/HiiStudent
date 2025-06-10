import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message, userType } = req.body;

  try {
    // Create different system prompts based on user type
    let systemPrompt = '';
    if (userType === 'student') {
      systemPrompt = `
        You are HiiStudent Career Assistant, an AI that helps students with job searching, 
        resume tips, interview preparation, and career advice. Be friendly, professional, 
        and provide actionable advice. Keep responses concise but helpful.
      `;
    } else {
      systemPrompt = `
        You are HiiStudent Hiring Assistant, an AI that helps employers with recruitment, 
        writing job descriptions, interview techniques, and finding qualified candidates. 
        Provide professional, practical advice.
      `;
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    const reply = response.data.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      reply: "Sorry, I'm having trouble processing your request. Please try again later." 
    });
  }
}