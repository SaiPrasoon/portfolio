import { sql } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { fullName, aboutMe, resumeUrl } = await request.json();
  try {
    await sql(
      "UPDATE profiledata SET fullname = $1, aboutme = $2, resumeurl = $3",
      [fullName, aboutMe, resumeUrl]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
