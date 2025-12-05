import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
    }

    const filePath = path.join(process.cwd(), "app/data/users.json");
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    if (data.users.some(u => u.email === email)) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    data.users.push({ email, password });

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
