"use client";

import { iEducation } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import EducationForm from "../forms/EducationForm";

interface EducationTableProps {
  educationList: iEducation[];
}

export default function EducationTable({ educationList }: EducationTableProps) {
  const [editingEdu, setEditingEdu] = useState<iEducation | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/admin/education", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      toast.success("Education deleted");
      router.refresh();
    } else {
      toast.error("Failed to delete education");
    }
  };

  const handleSuccess = () => {
    setShowForm(false);
    setEditingEdu(null);
    router.refresh();
  };

  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(d);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Education</h3>
        <Button
          size="sm"
          onClick={() => {
            setEditingEdu(null);
            setShowForm(true);
          }}
          className="gap-1.5"
        >
          <Plus size={14} /> Add Education
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Degree</TableHead>
              <TableHead>Institution</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {educationList.map((edu) => (
              <TableRow key={edu.id}>
                <TableCell className="font-medium">{edu.degree}</TableCell>
                <TableCell>{edu.institution}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </TableCell>
                <TableCell>{edu.grade}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setEditingEdu(edu);
                        setShowForm(true);
                      }}
                    >
                      <Pencil size={14} />
                    </Button>
                    <DeleteConfirmDialog
                      entityName="Education"
                      onConfirm={() => handleDelete(edu.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <EducationForm
        open={showForm}
        onOpenChange={setShowForm}
        education={editingEdu}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
