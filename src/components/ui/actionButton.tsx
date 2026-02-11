import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const ActionButton = ({
  icon,
  label,
  menu,
  actionHandler,
}: {
  icon: React.ReactNode;
  label: string;
  menu: string[];
  actionHandler?: () => void;
}) => {
  let hasMenu = menu && menu.length > 0;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 whitespace-nowrap text-foreground px-3 py-1" onClick={actionHandler}>
          <span>{icon}</span>
          <span className="text-sm font-normal">{label}</span>
        </button>
      </DropdownMenuTrigger>
      {hasMenu && (
        <DropdownMenuContent
          sideOffset={8}
          align="start"
          className="z-50 min-w-[160px] overflow-hidden rounded-lg border border-border bg-card p-1.5 shadow-xl animate-in fade-in zoom-in-95"
        >
          {menu.map((action, index) => (
            <>
              <DropdownMenuItem
              key={index}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm text-foreground font-medium outline-none transition-colors hover:bg-hover focus:bg-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              {action}
            </DropdownMenuItem>
            <hr className="border border-border last:hidden" />
            </>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};