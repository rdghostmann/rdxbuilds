import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface Props {
    title: string
    company: string
    href: string
    location: string
    start: string
    end: string
    logoUrl?: string
    description: string
    roles: readonly string[]         // changed to readonly
    technologies: readonly string[] // changed to readonly
    badges: readonly string[]
}

export default function RdWorkCard({
    title,
    company,
    href,
    location,
    start,
    end,
    logoUrl,
    description,
    roles,
    technologies,
    badges,
}: Props) {
    return (
        <div className="border flex flex-col rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-background space-y-3">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">

                {logoUrl && (
                    <div className="bg-white relative w-12 h-12 rounded-md overflow-hidden">
                        <Image
                            src={logoUrl}
                            alt={title}
                            className="w-full h-full"
                            width={50}
                            height={50}
                            priority
                        />
                    </div>
                )}
                <div className="text-center">
                    <h3 className="text-xl font-semibold">
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {title}
                        </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {company} • {location} ({start} – {end})
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">{description}</p>

            {/* Roles */}
            <div>
                <h4 className="text-sm font-semibold mt-2">Responsibilities:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {roles.map((role, index) => (
                        <li key={index}>{role}</li>
                    ))}
                </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-3">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
                {badges.map((badge, index) => (
                    <Badge key={index} className="rounded-full bg-foreground text-background px-2 py-0.5 text-xs">
                        {badge}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
