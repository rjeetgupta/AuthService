import { z } from "zod";

const registerSchema = z.object({
    name: z.string("Name is required")
        .min(2, "Minimum length should be 2")
        .max(50, "Maximum length should be 50"),
    email: z.email("Email is required"),
    password: z.string("Password is required").min(4).max(50)
})

export type registerInput = z.infer<typeof registerSchema>