import * as React from "react";
import { cn } from "@/lib/utils";
import { AVATAR_RULES } from "@/constants/settings";

type Props = {
  initialUrl?: string | null;
  value?: File | null;
  onChange: (file: File | null) => void;
  className?: string;
};

function bytesToMB(bytes: number) {
  return Math.round((bytes / (1024 * 1024)) * 10) / 10;
}

export default function AvatarUploader({
  initialUrl,
  value,
  onChange,
  className,
}: Props) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [previewUrl, setPreviewUrl] = React.useState<string | null>(
    initialUrl ?? null
  );
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!value) return;
    const url = URL.createObjectURL(value);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [value]);

  React.useEffect(() => {
    if (value) return;
    setPreviewUrl(initialUrl ?? null);
  }, [initialUrl, value]);

  const openPicker = () => inputRef.current?.click();

  const validate = (file: File) => {
    if (!AVATAR_RULES.accept.includes(file.type)) {
      return "Only JPG/JPEG/PNG files are allowed.";
    }
    if (file.size > AVATAR_RULES.maxBytes) {
      return `File is too large (${bytesToMB(file.size)}MB). Max is 2MB.`;
    }
    return null;
  };

  const onPick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0] ?? null;
    e.target.value = "";

    if (!file) {
      setError(null);
      onChange(null);
      return;
    }

    const msg = validate(file);
    if (msg) {
      setError(msg);
      onChange(null);
      return;
    }

    setError(null);
    onChange(file);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center pt-6 sm:pt-10",
        className
      )}
      style={
        {
          ["--avatar-size" as any]: "clamp(96px, 22vw, 140px)",
          ["--avatar-ring" as any]: "clamp(8px, 2vw, 10px)",
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        onClick={openPicker}
        aria-label="Upload photo"
        className={cn(
          "group relative inline-flex overflow-visible",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
        style={{
          width: "var(--avatar-size)",
          height: "var(--avatar-size)",
        }}
      >
        {/* OUTER dashed ring */}
        <span
          className="pointer-events-none absolute rounded-full border border-dashed"
          style={{
            inset: "calc(var(--avatar-ring) * -1)",
            borderColor: "#D9D9D9",
          }}
        />

        <span className="relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F2F2F2] dark:bg-muted-foreground">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile photo"
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <img
                src="/camera.svg"
                alt="Upload"
                className="h-9 w-9"
              />
              <span className="text-xs sm:text-sm font-medium text-[#515151]">
                Upload photo
              </span>
            </>
          )}

          {/* hover overlay */}
          <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
        </span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={onPick}
      />

      {/* Helper text */}
      <div className="mt-6 sm:mt-8 text-center max-w-[320px] sm:max-w-[420px] px-2">
        <p className="text-xs sm:text-[14px] text-muted-foreground">
          {AVATAR_RULES.helperAllowed}
        </p>
        <p className="mt-1 text-xs sm:text-[14px] text-foreground">
          {AVATAR_RULES.helperTypes}
        </p>

        <div className="mt-3 md:mt-4 sm:mt-6">
          <p className="text-xs sm:text-[14px] text-muted-foreground">
            {AVATAR_RULES.helperMax}
          </p>
          <p className="my-1 text-xs sm:text-[14px] text-foreground">
            {AVATAR_RULES.helperMaxValue}
          </p>
        </div>

        {error ? (
          <p className="mt-4 text-xs text-destructive">{error}</p>
        ) : null}
      </div>
    </div>
  );
}
