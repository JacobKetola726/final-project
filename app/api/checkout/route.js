
export async function POST(req) {
    try {
        const cart = await req.json();
        
        if (!Array.isArray(cart) || cart.length === 0) {
            return new Response(JSON.stringify({ error: "Cart is empty" }), {status: 400 });
        }

        const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0);

        console.log("New order:");
        console.log(JSON.stringify(cart, null, 2));
        console.log("Total: $" + total.toFixed(2));

        return Response.json({
            message: "Order successfully processed",
            orderTotal: total,
            items: cart
        });
    } catch (e) {
        console.error("Checkout API Error:", e);
        return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}