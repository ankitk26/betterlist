import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import { Button } from "~/components/ui/button";

export function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button size="icon" variant="outline" onClick={toggleTheme}>
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden block" />
    </Button>
  );
}
