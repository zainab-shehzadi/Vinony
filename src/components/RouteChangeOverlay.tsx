
type Props = {
  open: boolean;
};

export default function RouteChangeOverlay({ open }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
      <div className="flex flex-col items-center gap-3 ">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    </div>
  );
}
