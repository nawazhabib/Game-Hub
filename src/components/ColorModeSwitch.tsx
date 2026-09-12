import { HStack, Switch, Text } from "@chakra-ui/react";
import { useEffect, useState, type ComponentProps, type ComponentType, type PropsWithChildren } from "react";

const SwitchControl = Switch.Control as ComponentType<
    PropsWithChildren<ComponentProps<typeof Switch.Control>>
>;

const ColorModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <HStack>
            <Switch.Root
                checked={isDarkMode}
                onCheckedChange={(details: { checked: boolean }) => setIsDarkMode(details.checked)}
            >
                <Switch.HiddenInput />
                <SwitchControl>
                    <Switch.Thumb />
                </SwitchControl>
            </Switch.Root>
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch;