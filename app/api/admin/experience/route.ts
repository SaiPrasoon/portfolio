import { sql } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { companyName, companyLogo, isCurrent, startDate, endDate } = await request.json();
  try {
    await sql(
      "INSERT INTO experience (companyname, companylogo, iscurrent, startdate, enddate) VALUES ($1, $2, $3, $4, $5)",
      [companyName, companyLogo, isCurrent, startDate, endDate]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, companyName, companyLogo, isCurrent, startDate, endDate } = await request.json();
  try {
    await sql(
      "UPDATE experience SET companyname = $1, companylogo = $2, iscurrent = $3, startdate = $4, enddate = $5 WHERE id = $6",
      [companyName, companyLogo, isCurrent, startDate, endDate, id]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    // Delete associated projects first
    await sql("DELETE FROM projects WHERE experienceid = $1", [id]);
    await sql("DELETE FROM experience WHERE id = $1", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
