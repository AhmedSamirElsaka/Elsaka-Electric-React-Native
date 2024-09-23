import express, { Request, Response } from "express";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});
const app = express();

app.use(express.json());

app.post("/api/stripe/payment", async (req: Request, res: Response) => {
  try {
    const { payment_method_id, payment_intent_id, customer_id, client_secret } =
      req.body;

    if (!payment_method_id || !payment_intent_id || !customer_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Attach the payment method to the customer
    const paymentMethod = await stripe.paymentMethods.attach(
      payment_method_id,
      {
        customer: customer_id,
      }
    );

    // Confirm the payment intent
    const result = await stripe.paymentIntents.confirm(payment_intent_id, {
      payment_method: paymentMethod.id,
    });

    // Send success response with the payment result
    return res.status(200).json({
      success: true,
      message: "Payment successful",
      result: result,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
