export default async function getProjectById(id: string) {
  const res = await fetch(
    `http://${process.env.API_HOST}:5000/api/dev/v1/project/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
