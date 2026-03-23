import { sql } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { fullName, dateOfBirth, aboutMe, resumeUrl } = await request.json();
  try {
    await sql(
      'UPDATE profiledata SET "fullName" = $1, "dateOfBirth" = $2, "aboutMe" = $3, "resumeurl" = $4',
      [fullName, dateOfBirth, aboutMe, resumeUrl]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
