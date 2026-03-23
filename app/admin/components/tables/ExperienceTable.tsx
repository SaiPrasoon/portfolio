"use client";

import { getExperienceDuration } from "@/app/services/commonService";
import { iExperience, iProject } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronRight, Pencil, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { toast } from "sonner";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import ExperienceForm from "../forms/ExperienceForm";
import ProjectForm from "../forms/ProjectForm";

interface ExperienceTableProps {
  experiences: iExperience[];
}

export default function ExperienceTable({ experiences }: ExperienceTableProps) {
  const [editingExp, setEditingExp] = useState<iExperience | null>(null);
  const [showExpForm, setShowExpForm] = useState(false);
  const [editingProject, setEditingProject] = useState<iProject | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectExpId, setProjectExpId] = useState<number | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const router = useRouter();

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDeleteExp = async (id: number) => {
    const res = await fetch("/api/admin/experience", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      toast.success("Experience deleted");
      router.refresh();
    } else {
      toast.error("Failed to delete experience");
    }
  };

  const handleDeleteProject = async (id: number) => {
    const res = await fetch("/api/admin/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      toast.success("Project deleted");
      router.refresh();
    } else {
      toast.error("Failed to delete project");
    }
  };

  const handleExpSuccess = () => {
    setShowExpForm(false);
    setEditingExp(null);
    router.refresh();
  };

  const handleProjectSuccess = () => {
    setShowProjectForm(false);
    setEditingProject(null);
    setProjectExpId(null);
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        <Button
          size="sm"
          onClick={() => {
            setEditingExp(null);
            setShowExpForm(true);
          }}
          className="gap-1.5"
        >
          <Plus size={14} /> Add Experience
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8"></TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {experiences.map((exp) => (
              <Fragment key={exp.id}>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {expandedIds.has(exp.id) ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{exp.companyName}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {getExperienceDuration(exp.isCurrent, exp.startDate, exp.endDate)}
                  </TableCell>
                  <TableCell>
                    {exp.isCurrent ? (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                        Current
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Past</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingExp(exp);
                          setShowExpForm(true);
                        }}
                      >
                        <Pencil size={14} />
                      </Button>
                      <DeleteConfirmDialog
                        entityName="Experience"
                        onConfirm={() => handleDeleteExp(exp.id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>

                {expandedIds.has(exp.id) && (
                  <TableRow key={`projects-${exp.id}`}>
                    <TableCell colSpan={5} className="bg-accent/30 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Projects ({exp.projects.length})
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingProject(null);
                            setProjectExpId(exp.id);
                            setShowProjectForm(true);
                          }}
                          className="gap-1.5 h-7 text-xs"
                        >
                          <Plus size={12} /> Add Project
                        </Button>
                      </div>
                      {exp.projects.length > 0 ? (
                        <div className="space-y-2">
                          {exp.projects.map((proj) => (
                            <div
                              key={proj.id}
                              className="flex items-center justify-between p-2 rounded-lg bg-card border"
                            >
                              <div>
                                <div className="text-sm font-medium">{proj.projectName}</div>
                                <div className="text-xs text-muted-foreground">
                                  {proj.responsibilities.length} responsibilities
                                </div>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => {
                                    setEditingProject(proj);
                                    setProjectExpId(exp.id);
                                    setShowProjectForm(true);
                                  }}
                                >
                                  <Pencil size={12} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 text-muted-foreground hover:text-red-400"
                                  onClick={() => handleDeleteProject(proj.id)}
                                >
                                  <Trash2 size={12} />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-muted-foreground">No projects yet.</p>
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </div>

      <ExperienceForm
        open={showExpForm}
        onOpenChange={setShowExpForm}
        experience={editingExp}
        onSuccess={handleExpSuccess}
      />

      <ProjectForm
        open={showProjectForm}
        onOpenChange={setShowProjectForm}
        project={editingProject}
        experienceId={projectExpId}
        onSuccess={handleProjectSuccess}
      />
    </div>
  );
}
