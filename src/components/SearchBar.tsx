import { Input } from "@chakra-ui/react/input"
import { InputGroup } from "./ui/input-group"
import { BsSearch } from "react-icons/bs"
import { useRef } from "react";

interface Props {
    onSearch: (s: string) => void;
}
export const SearchBar = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) return onSearch(ref.current.value)
        }}>
            <InputGroup
                flex="1"
                startElement={<BsSearch />}
            >
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant={'subtle'} />
            </InputGroup>
        </form>
    )
}