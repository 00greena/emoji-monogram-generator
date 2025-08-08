// /api/kei-ai/generate.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, prompt, parameters } = req.body;

    // KEI.ai smart_generate API call
    const response = await fetch('https://api.kei.ai/v1/smart_generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KEI_AI_API_KEY}` // Add your KEI.ai API key to Vercel env vars
      },
      body: JSON.stringify({
        description: prompt,
        parameters: {
          service: service, // 'midjourney'
          ...parameters
        }
      })
    });

    if (!response.ok) {
      throw new Error(`KEI.ai API error: ${response.status}`);
    }

    const result = await response.json();
    
    // Return the task ID for polling
    res.status(200).json({
      taskId: result.taskId,
      service: service,
      status: 'processing'
    });

  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({ 
      error: 'Failed to start generation',
      details: error.message 
    });
  }
}