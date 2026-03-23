import { sql } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { projectName, projectUrl, isCurrent, startDate, endDate, responsibilities, experienceId } =
    await request.json();
  try {
    await sql(
      "INSERT INTO projects (projectname, projecturl, iscurrent, startdate, enddate, responsibilities, experienceid) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [projectName, projectUrl, isCurrent, startDate, endDate, responsibilities, experienceId]
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
  const { id, projectName, projectUrl, isCurrent, startDate, endDate, responsibilities } =
    await request.json();
  try {
    await sql(
      "UPDATE projects SET projectname = $1, projecturl = $2, iscurrent = $3, startdate = $4, enddate = $5, responsibilities = $6 WHERE id = $7",
      [projectName, projectUrl, isCurrent, startDate, endDate, responsibilities, id]
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
    await sql("DELETE FROM projects WHERE id = $1", [id]);
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/experience");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
