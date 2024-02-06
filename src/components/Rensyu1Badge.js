import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";

export function Rensyu1Badge(props) {
    return (
        <div className="flex items-center gap-8">
            <Badge content={props.num}>
                <IconButton>
                    <HomeIcon className="h-4 w-4" />
                </IconButton>
            </Badge>

        </div>
    );
}