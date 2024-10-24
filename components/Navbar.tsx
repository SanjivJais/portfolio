import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-6 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-dark to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 card_grad [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu ">
                {DATA.navbar.map((item) => (
                    <DockIcon key={item.href}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 hover:bg-dark/50"
                                    )}
                                >
                                    <item.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full" />
                {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 hover:bg-dark/50"
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                
            </Dock>
        </div>
    );
}
