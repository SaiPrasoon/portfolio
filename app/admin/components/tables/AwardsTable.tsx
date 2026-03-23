"use client";

import { iAward } from "@/app/utils/interfaces";
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
import AwardForm from "../forms/AwardForm";

interface AwardsTableProps {
  awards: iAward[];
}

export default function AwardsTable({ awards }: AwardsTableProps) {
  const [editingAward, setEditingAward] = useState<iAward | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/admin/awards", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      toast.success("Award deleted");
      router.refresh();
    } else {
      toast.error("Failed to delete award");
    }
  };

  const handleSuccess = () => {
    setShowForm(false);
    setEditingAward(null);
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Awards</h3>
        <Button
          size="sm"
          onClick={() => {
            setEditingAward(null);
            setShowForm(true);
          }}
          className="gap-1.5"
        >
          <Plus size={14} /> Add Award
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {awards.map((award) => (
              <TableRow key={award.id}>
                <TableCell className="font-medium">{award.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                  {award.description}
                </TableCell>
                <TableCell>{award.year}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setEditingAward(award);
                        setShowForm(true);
                      }}
                    >
                      <Pencil size={14} />
                    </Button>
                    <DeleteConfirmDialog
                      entityName="Award"
                      onConfirm={() => handleDelete(award.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AwardForm
        open={showForm}
        onOpenChange={setShowForm}
        award={editingAward}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
