import { promises as fs } from "fs";
import path from "path";

export async function GET(req) {
  try {
    const loggedInCookie = req.cookies.get("loggedIn")?.value;

    if (!loggedInCookie) {
      return new Response(JSON.stringify({ user: null }), { status: 401 });
    }

    // Optionally, you could return the user's email or id from a session
    const filePath = path.join(process.cwd(), "app/data/users.json");
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    // For demo, just return first user (or enhance to track currently logged-in user)
    // If you had a session token, you could match the cookie to a specific user
    const user = data.users[0] || null;

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
