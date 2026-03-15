import { Calculator, LayoutGrid, Layers, Grid3X3, HardHat, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: Calculator, label: 'Concrete Estimator', active: true },
  { icon: LayoutGrid, label: 'Brick Calculator', active: false },
  { icon: Layers, label: 'Plaster Calc', active: false },
  { icon: Grid3X3, label: 'Floor Tiles', active: false },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 surface-card no-print"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex-shrink-0 no-print z-50 transition-transform md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sidebar-primary font-bold text-xl tracking-tight">
            <div className="bg-accent p-1.5 rounded-lg">
              <HardHat className="w-6 h-6 text-accent-foreground" />
            </div>
            <span>
              CONCRETE<span className="text-accent">.IO</span>
            </span>
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden text-sidebar-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-4 px-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground opacity-60'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-8 px-8 text-xs text-sidebar-muted">
          v2.4.0 Professional Edition
        </div>
      </aside>
    </>
  );
}
