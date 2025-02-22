import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react/button";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
]

interface Props {
    onSortSelect: (sort: string) => void;
    selectedSort: string | null;
}
export const SortSelector = ({ onSortSelect, selectedSort }: Props) => {

    const currentSortOrder = sortOrders.find((sort) => sort.value === selectedSort)?.label;
    return (
        <MenuRoot>
            <MenuTrigger>
                <Button>
                    {'Order By: ' + (currentSortOrder || 'Relevance')} <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent colorPalette={'gray'}>
                {sortOrders.map((sort) => (
                    <MenuItem
                        onClick={() => onSortSelect(sort.value)}
                        key={sort.value}
                        value={sort.value}
                    >
                        {sort.label}
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    );
};
