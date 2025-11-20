
import Image from "next/image";

export default function SuccessPage() {
    return (
        <div style={{ maxWidth: 700, margin: '2rem auto', textAlign: 'center' }}>
            <h1>Order Complete!</h1>
            <Image src="/images/completion.png" alt="checkmark" width={120} height={120} style={{ height: 'auto', borderRadius: '50%' }}/>
            <p>Your Bathroom Beverage Leverage System order has been received.</p>
        </div>
    );
}