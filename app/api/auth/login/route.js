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

    const user = data.users.find(u => u.email === email && u.password === password);

    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    // Set a simple HTTP-only cookie "loggedIn"
    // For production also set Secure and SameSite attributes
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Set-Cookie": `loggedIn=true; Path=/; HttpOnly;`
      }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
