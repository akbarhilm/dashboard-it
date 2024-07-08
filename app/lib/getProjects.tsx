export default async function getProjects(tahun: any) {
  const res = await fetch(
    `http://${process.env.API_HOST}:5000/api/dev/v1/projects?tahun=${tahun}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
