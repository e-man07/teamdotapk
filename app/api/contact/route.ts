import { NextResponse } from "next/server"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Create new contact entry in database
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        projectType: data.projectType,
        budget: data.budget,
        message: data.message,
      },
    })
    
    return NextResponse.json({ success: true, contact }, { status: 201 })
  } catch (error) {
    console.error("Error creating contact:", error)
    return NextResponse.json(
      { success: false, error: "Failed to create contact" },
      { status: 500 }
    )
  }
}
