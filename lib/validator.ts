import { z } from "zod";

export const eventFormSchema = z
  .object({
    title: z.string().min(3, "Title must be atleast 3 characters"),
    description: z
      .string()
      .min(3, "Description must be atleast 3 characters")
      .max(400, "Description must be less than 400 characters"),
    location: z
      .string()
      .min(3, "Description must be atleast 3 characters")
      .max(400, "Description must be less than 400 characters"),
    imageUrl: z.string().url("Invalid image URL"),
    startDateTime: z.date().min(new Date(), "Start date must be in the future"),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url("Invalid URL"),
  })
  .refine((data) => data.endDateTime > data.startDateTime, {
    message: "End date cannot be earlier than start date.",
    path: ["endDateTime"],
  });
