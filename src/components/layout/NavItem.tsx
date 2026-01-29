import { ChevronDown } from "lucide-react";

export type NavItem = {
  key: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
};

type Props = {
  items: NavItem[];
  onNavigate?: () => void; // for closing mobile menu after click
  className?: string;
  itemClassName?: string;
};

export default function NavItems({
  items,
  onNavigate,
  className = "",
  itemClassName = "",
}: Props) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            onClick={onNavigate}
            className={itemClassName}
          >
            {item.label}
            {item.hasDropdown ? <ChevronDown size={16} className="mt-[1px]" /> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
