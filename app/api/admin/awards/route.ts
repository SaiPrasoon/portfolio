import { sql } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, description, docUrl, year } = await request.json();
  try {
    await sql(
      "INSERT INTO awards (name, description, docurl, year) VALUES ($1, $2, $3, $4)",
      [name, description, docUrl, year]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, name, description, docUrl, year } = await request.json();
  try {
    await sql(
      "UPDATE awards SET name = $1, description = $2, docurl = $3, year = $4 WHERE id = $5",
      [name, description, docUrl, year, id]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    await sql("DELETE FROM awards WHERE id = $1", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
