export default async function getProkerStatus(tahun: any) {
  const res = await fetch(
    `http://${process.env.API_HOST}:5000/api/dev/v1/project/project-mpti?tahun=${tahun}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
