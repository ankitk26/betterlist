import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeHandler() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">Theme</span>
      <div className="flex items-center gap-1 rounded-md bg-muted p-1">
        <Button
          className="size-6 p-0"
          onClick={() => handleThemeChange("light")}
          size="sm"
          variant={theme === "light" ? "default" : "ghost"}
        >
          <Sun className="size-3" />
        </Button>
        <Button
          className="size-6 p-0"
          onClick={() => handleThemeChange("system")}
          size="sm"
          variant={theme === "system" ? "default" : "ghost"}
        >
          <Monitor className="size-3" />
        </Button>
        <Button
          className="size-6 p-0"
          onClick={() => handleThemeChange("dark")}
          size="sm"
          variant={theme === "dark" ? "default" : "ghost"}
        >
          <Moon className="size-3" />
        </Button>
      </div>
    </div>
  );
}
