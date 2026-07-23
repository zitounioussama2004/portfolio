import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {

    theme: Theme;

    toggleTheme: () => void;

}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Props {

    children: ReactNode;

}

export const ThemeProvider = ({ children }: Props) => {

    const [theme, setTheme] = useState<Theme>(() => {

        const saved = localStorage.getItem("theme");

        if (saved === "dark" || saved === "light") {

            return saved;

        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches

            ? "dark"

            : "light";

    });

    useEffect(() => {

        const html = document.documentElement;

        if (theme === "dark") {

            html.classList.add("dark");

        }

        else {

            html.classList.remove("dark");

        }

        localStorage.setItem("theme", theme);

    }, [theme]);

    const toggleTheme = () => {

        setTheme((prev) =>

            prev === "dark"

                ? "light"

                : "dark"

        );

    };

    return (

        <ThemeContext.Provider

            value={{

                theme,

                toggleTheme,

            }}

        >

            {children}

        </ThemeContext.Provider>

    );

};

export const useTheme = () => {

    const context = useContext(ThemeContext);

    if (!context) {

        throw new Error(

            "useTheme must be used inside ThemeProvider"

        );

    }

    return context;

};