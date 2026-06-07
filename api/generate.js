import { OpenAI } from 'openai';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  console.log('API route called:', req.method, req.url);

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data } = req.body;

    // Extract the form data
    const {
      serviceBranch,
      payGrade,
      currentBase,
      destinationBase,
      reportDate,
      moveType,
      familySize,
      childrenAges,
      pets,
      spouseEmployment,
      specificNeeds,
      additionalNotes
    } = data;

    // Validate required fields
    if (!currentBase || !destinationBase) {
      return res.status(400).json({ error: 'Current base and destination base are required' });
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Construct the prompt based on the form data and system prompt
    const systemPrompt = `You are MilPath, an expert military PCS relocation assistant with deep knowledge of: PCS move procedures and timelines, BAH/BAS allowances by rank and location, TriCare Prime/Select enrollment transfers, DoDEA and on-base school enrollment, base housing waitlists and off-base housing markets, HHG shipments and weight allowances, DITY/PPM move reimbursements, MyCAA spouse education benefits, MSEP spouse employment program, vehicle shipping via PCSmyPOV, pet relocation and breed restrictions, and base-specific resources for all major US installations including Virginia bases: Fort Gregg-Adams, MCB Quantico, Joint Base Langley-Eustis, Naval Station Norfolk, and NAS Oceana. Generate responses that are warm, specific, and actionable — never generic. Always structure your response using EXACTLY these section headers in ALL CAPS on their own line: TIMELINE, HOUSING, SCHOOLS & CHILDCARE, HEALTHCARE, LOGISTICS, FINANCES, BASE RESOURCES, QUICK WINS.`;

    const userPrompt = `
    I need a personalized PCS relocation plan with the following details:
    - Service Branch: ${serviceBranch}
    - Pay Grade/Rank: ${payGrade}
    - Current Base: ${currentBase}
    - Destination Base: ${destinationBase}
    - Estimated Report Date: ${reportDate}
    - Move Type: ${moveType}
    - Family Size: ${familySize}
    - Children's Ages: ${childrenAges}
    - Pets: ${pets}
    - Spouse Employment: ${spouseEmployment}
    - Specific Needs: ${specificNeeds.join(', ')}
    - Additional Notes: ${additionalNotes}
    `;

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    // Extract the generated text
    const generatedText = completion.choices[0].message.content;

    // Return the generated plan
    return res.status(200).json({ plan: generatedText });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return res.status(500).json({ error: 'Failed to generate PCS plan' });
  }
}