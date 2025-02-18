import { Platform } from "@/hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone, } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";


interface Props {
    platforms: Platform[];
}

export const PlatformsIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        andriod: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map(platform =>
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug] ? iconMap[platform.slug] : iconMap['web']}
                    color={'gray.500'}
                />)}
        </HStack>
    )
}