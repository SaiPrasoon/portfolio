import { sql } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, logo, type } = await request.json();
  try {
    await sql("INSERT INTO skills (name, logo, type) VALUES ($1, $2, $3)", [name, logo, type]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, name, logo, type } = await request.json();
  try {
    await sql("UPDATE skills SET name = $1, logo = $2, type = $3 WHERE id = $4", [name, logo, type, id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    await sql("DELETE FROM skills WHERE id = $1", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
