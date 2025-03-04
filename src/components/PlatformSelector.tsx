import { Platform } from "@/hooks/useGames";
import { usePlatforms } from "@/hooks/usePlatforms";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react/button";
import { BsChevronDown } from "react-icons/bs";


interface Props {
    onPlatformSelect: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
export const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger>
                <Button>
                    {selectedPlatform ? selectedPlatform.name : 'Platforms'} <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent colorPalette={'gray'}>
                {data.map((platform) => (
                    <MenuItem
                        onClick={() => onPlatformSelect(platform)}
                        key={platform.id}
                        value={platform.slug}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    );
};
