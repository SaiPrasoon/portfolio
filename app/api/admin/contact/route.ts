import { sql } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { mobileNumber, emailId, githubUrl, linkedInUrl, twitterUrl } = await request.json();
  try {
    await sql(
      "UPDATE contact SET mobilenumber = $1, emailid = $2, githuburl = $3, linkedinurl = $4, twitterurl = $5",
      [mobileNumber, emailId, githubUrl, linkedInUrl, twitterUrl]
    );
    revalidatePath("/admin");
    revalidatePath("/contact");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
