import { sql } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { companyName, role, companyLogo, isCurrent, startDate, endDate } = await request.json();
  try {
    await sql(
      "INSERT INTO experience (companyname, role, companylogo, iscurrent, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6)",
      [companyName, role, companyLogo, isCurrent, startDate, endDate]
    );
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/experience");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, companyName, role, companyLogo, isCurrent, startDate, endDate } = await request.json();
  try {
    await sql(
      "UPDATE experience SET companyname = $1, role = $2, companylogo = $3, iscurrent = $4, startdate = $5, enddate = $6 WHERE id = $7",
      [companyName, role, companyLogo, isCurrent, startDate, endDate, id]
    );
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/experience");
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
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/experience");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
