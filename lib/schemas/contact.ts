import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  project: z.string({
    required_error: "Please select a project type.",
  }),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

// Function to convert form data to database schema format
export const mapFormToDbSchema = (formData: ContactFormValues) => {
  return {
    name: formData.name,
    email: formData.email,
    company: formData.company || null,
    projectType: formData.project, // Map 'project' form field to 'projectType' DB field
    budget: formData.budget || null,
    message: formData.message,
  }
}
