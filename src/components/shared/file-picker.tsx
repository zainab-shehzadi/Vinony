import { FileText, X } from "lucide-react";

interface IProp {
  fileInputRef: React.RefObject<HTMLInputElement>;
  setFiles: (files: string[]) => void;
  files: string[];
  fileData: File[];
  setFileData: (files: File[]) => void;
}

function FilePicker({
  setFiles,
  files,
  fileData,
  setFileData,
  fileInputRef,
}: IProp) {
  const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    // Purani files + New files merge kar rahe hain
    const updatedFileData = [...fileData, ...selectedFiles];
    setFileData(updatedFileData);

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setFiles([...files, ...newPreviews]);
    // const file = e.target.files?.[0] || null;
    // setFileData(file);

    // if (file) {
    //   const previewURL = URL.createObjectURL(file);
    //   setFiles(previewURL);
    // }
  };
  const removeFile = (index: number) => {
    const updatedData = fileData.filter((_, i) => i !== index);
    const updatedPreviews = files.filter((_, i) => i !== index);

    setFileData(updatedData);
    setFiles(updatedPreviews);
  };

  return (
    <>
      <div className="w-full rounded-xl flex gap-1 overflow-x-auto hide-scrollbar">
        {fileData.map((file, index) => (
          <div
            className="w-[50vw] lg:w-[15vw] flex items-center gap-3 p-1 border border-border rounded-xl bg-muted/40"
            key={index}
          >
            {/* IMAGE PREVIEW */}
            {file.type.startsWith("image/") ? (
              <img
                src={files[index]}
                alt="preview"
                className="w-14 h-14 rounded-lg object-cover border"
              />
            ) : (
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-background">
                <FileText size={28} className="text-accent" />
              </div>
            )}

            {/* FILE NAME */}
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate text-foreground">
                {file.name}
              </p>
              <p className="text-xs text-accent">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>

            {/* REMOVE */}
            <button
              onClick={()=>removeFile(index)}
              className="text-zinc-500 hover:text-red-500 transition-all duration-300"
            >
              <X />
            </button>
          </div>
        ))}
        <input
          ref={fileInputRef}
          type="file"
          accept="*/*"
          className="hidden"
          multiple
          onChange={handleFileChanges}
        />
      </div>
    </>
  );
}

export default FilePicker;
