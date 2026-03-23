import { sql } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { degree, institution, startDate, endDate, grade } = await request.json();
  try {
    await sql(
      "INSERT INTO education (degree, institution, startdate, enddate, grade) VALUES ($1, $2, $3, $4, $5)",
      [degree, institution, startDate, endDate, grade]
    );
    revalidatePath("/admin");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, degree, institution, startDate, endDate, grade } = await request.json();
  try {
    await sql(
      "UPDATE education SET degree = $1, institution = $2, startdate = $3, enddate = $4, grade = $5 WHERE id = $6",
      [degree, institution, startDate, endDate, grade, id]
    );
    revalidatePath("/admin");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    await sql("DELETE FROM education WHERE id = $1", [id]);
    revalidatePath("/admin");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
