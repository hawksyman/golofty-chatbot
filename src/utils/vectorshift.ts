
export async function runVectorShiftPipeline(message: string) {
  const url = "https://api.vectorshift.ai/api/pipelines/run";
  const formData = new FormData();
  
  formData.append("pipeline_id", "67a7c313e769fd3351f93cf1");
  formData.append("input_0", message);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Api-Key": process.env.VECTORSHIFT_API_KEY || '',
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to process message through VectorShift pipeline');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('VectorShift API Error:', error);
    throw error;
  }
}
