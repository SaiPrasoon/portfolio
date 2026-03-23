"use client";

import { storage } from "@/app/lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Upload, X, FileText, Image as ImageIcon, Loader2 } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploadProps {
  value: string;
  onChange: (url: string) => void;
  accept: "image" | "pdf" | "both";
  folder: string;
  label?: string;
}

const acceptMap = {
  image: "image/png,image/jpeg,image/webp,image/svg+xml",
  pdf: "application/pdf",
  both: "image/png,image/jpeg,image/webp,image/svg+xml,application/pdf",
};

export default function FileUpload({
  value,
  onChange,
  accept,
  folder,
  label,
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (file: File) => {
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const storageRef = ref(storage, `${folder}/${timestamp}_${safeName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);
    setProgress(0);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      },
      (error) => {
        console.error("Upload failed:", error);
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        onChange(url);
        setUploading(false);
      }
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
    if (inputRef.current) inputRef.current.value = "";
  };

  const isImage = value && /\.(png|jpe?g|webp|svg)/i.test(value);

  const getFileName = (url: string) => {
    try {
      const decoded = decodeURIComponent(url);
      const pathPart = decoded.split("?")[0];
      const fullName = pathPart.split("/").pop() || "file";
      // Remove the timestamp prefix (e.g., "1234567890_")
      return fullName.replace(/^\d+_/, "");
    } catch {
      return "file";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium leading-none">{label}</label>
      )}

      {value && !uploading && (
        <div className="flex items-center gap-2 p-2 rounded-lg border bg-accent/30 min-w-0">
          {isImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="preview" className="h-10 w-10 rounded object-cover shrink-0" />
          ) : (
            <FileText size={20} className="text-muted-foreground shrink-0" />
          )}
          <span className="text-xs text-muted-foreground truncate flex-1">
            {getFileName(value)}
          </span>
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-muted-foreground hover:text-red-400 shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {uploading && (
        <div className="flex items-center gap-3 p-2 rounded-lg border bg-accent/30">
          <Loader2 size={16} className="animate-spin text-muted-foreground" />
          <div className="flex-1">
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{progress}%</span>
        </div>
      )}

      {!uploading && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          {accept === "pdf" ? (
            <Upload size={14} />
          ) : (
            <ImageIcon size={14} />
          )}
          {value ? "Replace file" : "Upload file"}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={acceptMap[accept]}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
