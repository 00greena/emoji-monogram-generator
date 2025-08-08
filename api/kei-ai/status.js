// /api/kei-ai/status.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, taskId } = req.body;

    // KEI.ai check_task_status API call
    const response = await fetch('https://api.kei.ai/v1/check_task_status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KEI_AI_API_KEY}`
      },
      body: JSON.stringify({
        service: service,
        taskId: taskId
      })
    });

    if (!response.ok) {
      throw new Error(`KEI.ai status API error: ${response.status}`);
    }

    const result = await response.json();
    
    // Return the status and image URL if completed
    res.status(200).json({
      status: result.status, // 'processing', 'completed', 'failed', etc.
      imageUrl: result.imageUrl || result.result_url || null,
      progress: result.progress || null
    });

  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({ 
      error: 'Failed to check status',
      details: error.message 
    });
  }
}