import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const ActionButton = ({
  icon,
  label,
  menu,
}: {
  icon: React.ReactNode;
  label: string;
  menu: string[];
}) => {
  let hasMenu = menu && menu.length > 0;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 whitespace-nowrap text-foreground">
          <span>{icon}</span>
          <span className="text-sm font-normal">{label}</span>
        </button>
      </DropdownMenuTrigger>
      {hasMenu && (
        <DropdownMenuContent
          sideOffset={8}
          align="start"
          className="z-50 min-w-[160px] overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl animate-in fade-in zoom-in-95"
        >
          {menu.map((action, index) => (
            <DropdownMenuItem
              key={index}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm text-primaryDark font-medium outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              {action}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};