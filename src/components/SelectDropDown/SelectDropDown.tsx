import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "@/components/ui/select";
import { createListCollection } from "@chakra-ui/react";


type SelectDropDownProps = {
    label?: string | '',
    placeholder?: string | '',
    elements: {
        items: Array<{ label: string; value: string }>;
      };
    onSelectedValue: React.Dispatch<React.SetStateAction<string[]>>;
    combineItems?: boolean;
};

  export default function SelectDropDown( { label, placeholder, elements, onSelectedValue } :  SelectDropDownProps  ) {

    const listElements = createListCollection({
        items: [
            ...elements.items
        ]
    });

    return (
        <SelectRoot collection={listElements} size="md" width="200px" onValueChange={(e) => onSelectedValue(e.value)} variant={"outline"}>
            <SelectLabel > {label } </SelectLabel>
            <SelectTrigger>
                <SelectValueText placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
            {listElements.items.map(item => (
                <SelectItem item={item} key={item.value}>
                    {item.label}
                </SelectItem>
            ))}
            </SelectContent>
        </SelectRoot>
    )
  }