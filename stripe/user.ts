import { Stripe } from "stripe";
import express from "express";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const app = express();

app.use(express.json());

app.post("/api/stripe/create", async (req, res) => {
  const { name, email, amount, paymentMethodId } = req.body;

  if (!name || !email || !amount) {
    return res.status(400).json({ error: "Please enter valid details" });
  }

  let customer;

  const existingCustomer = await stripe.customers.list({ email });

  if (existingCustomer.data.length > 0) {
    customer = existingCustomer.data[0];
  } else {
    customer = await stripe.customers.create({ name, email });
  }

  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2024-06-20" }
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(amount) * 100, // amount in cents
    currency: "egp",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  return res.json({
    paymentIntent: paymentIntent,
    ephemeralKey: ephemeralKey,
    customer: customer.id,
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
