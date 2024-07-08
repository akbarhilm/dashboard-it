export default async function getSummary(tahun: any) {
  const response = await fetch(
    `http://${process.env.API_HOST}:5000/api/dev/v1/project/summaries?tahun=${tahun}`,
    { next: { revalidate: 10 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
}
