export async function POST() {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Set-Cookie": `loggedIn=; Path=/; Max-Age=0; HttpOnly;`
    }
  });
}
