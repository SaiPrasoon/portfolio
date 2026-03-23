"use client";

import { iSkill } from "@/app/utils/interfaces";
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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import SkillForm from "../forms/SkillForm";

interface SkillsTableProps {
  skills: iSkill[];
}

export default function SkillsTable({ skills }: SkillsTableProps) {
  const [editingSkill, setEditingSkill] = useState<iSkill | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/admin/skills", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      toast.success("Skill deleted");
      router.refresh();
    } else {
      toast.error("Failed to delete skill");
    }
  };

  const handleSuccess = () => {
    setShowForm(false);
    setEditingSkill(null);
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        <Button
          size="sm"
          onClick={() => {
            setEditingSkill(null);
            setShowForm(true);
          }}
          className="gap-1.5"
        >
          <Plus size={14} /> Add Skill
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.id}>
                <TableCell>
                  <Image
                    src={skill.logo}
                    width={32}
                    height={32}
                    alt={skill.name}
                    className="w-8 h-8"
                  />
                </TableCell>
                <TableCell className="font-medium">{skill.name}</TableCell>
                <TableCell>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {skill.type}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setEditingSkill(skill);
                        setShowForm(true);
                      }}
                    >
                      <Pencil size={14} />
                    </Button>
                    <DeleteConfirmDialog
                      entityName="Skill"
                      onConfirm={() => handleDelete(skill.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <SkillForm
        open={showForm}
        onOpenChange={setShowForm}
        skill={editingSkill}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
