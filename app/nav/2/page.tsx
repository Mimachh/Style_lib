"use client"

import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationLink from "./_components/NavigationLink";

import ProjectLink from "./_components/ProjectLink";
import ProjectNavigation from "./_components/ProjectNavigation";

import { CalendarDaysIcon, ClockIcon, File, HandPlatter, LayoutDashboard, LayoutDashboardIcon, MessageCircle, PieChart, Settings, UsersIcon } from "lucide-react";

const containerVariants = {
    close: {
        width: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
    open: {
        width: "16rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
};

const svgVariants = {
    close: {
        rotate: 360,
    },
    open: {
        rotate: 180,
    },
};

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const containerControls = useAnimationControls();
    const svgControls = useAnimationControls();

    useEffect(() => {
        if (isOpen) {
            containerControls.start("open");
            svgControls.start("open");
        } else {
            containerControls.start("close");
            svgControls.start("close");
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.querySelector("nav");
            const projectNav = document.querySelector("#project-navigation"); // Assurez-vous d'ajouter cet id à votre composant ProjectNavigation

            if (selectedProject === null) {
                if (nav && !nav.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            } else {
                if (
                    nav &&
                    !nav.contains(event.target as Node) &&
                    projectNav &&
                    !projectNav.contains(event.target as Node)
                ) {
                    setIsOpen(false);
                    setSelectedProject(null);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedProject]);

    const handleOpenClose = () => {
        setIsOpen(!isOpen);
        setSelectedProject(null);
    };

    return (
        <div
        className="min-h-[200vh] bg-white"
        >
            <div className="sticky z-10 top-0 left-0 h-fit bg-secondary">
                <div className="min-h-[calc(100vh-25rem)]">
                <motion.nav
                    variants={containerVariants}
                    animate={containerControls}
                    initial="close"
                    className="bg-secondary border border-r flex flex-col p-5 justify-between absolute gap-10 top-0 left-0 min-h-full h-fit shadow"
                >
                    <div className="flex flex-row w-full justify-between place-items-center h-full">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
                        <button
                            className="p-1 rounded-full flex"
                            onClick={() => handleOpenClose()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="w-8 h-8 stroke-secondary-foreground/80"
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    variants={svgVariants}
                                    animate={svgControls}
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <NavigationLink
                            name="Dashboard"
                            href=""
                            active={true}
                        >
                            <LayoutDashboard className="stroke-inherit stroke-[0.75] min-w-8 w-8 h-8" />
                        </NavigationLink>
                        <NavigationLink name="Messages"
                            href=""
                            active={false}
                        >
                            <MessageCircle className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                        </NavigationLink>
                        <NavigationLink name="Ma page"
                        href=""
                        active={false}
                        >
                            <File className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                        </NavigationLink>
                        <NavigationLink name="Reporting"
                        href=""
                        active={false}
                        >
                            <PieChart className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                        </NavigationLink>
                        <NavigationLink name="Users"
                        href=""
                        active={false}
                        >
                            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                        </NavigationLink>
                        <NavigationLink
                         name="Tables"
                         href=""
                         active={false}
                        >
                            <HandPlatter className="stroke-inherit stroke-[0.75] min-w-8 w-8 h-8"  />
                        </NavigationLink>
                        <NavigationLink
                            name="Horaires"
                            href=""
                            active={false}
                        >
                            <ClockIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                        </NavigationLink>
                        <NavigationLink
                            name="Réservations"
                            href=""
                            active={false}
                        >
                            <CalendarDaysIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                        </NavigationLink>
                     
                      
                    </div>
                    <div className="flex flex-col gap-3">
                        <ProjectLink
                            name="Virtual Reality"
                            setSelectedProject={setSelectedProject}
                        >
                            <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" />
                        </ProjectLink>
                        <ProjectLink
                            name="Apple Vision Pro"
                            setSelectedProject={setSelectedProject}
                        >
                            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
                        </ProjectLink>
                        <ProjectLink
                            name="Porsche"
                            setSelectedProject={setSelectedProject}
                        >
                            <div className="min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700" />
                        </ProjectLink>
                        <ProjectLink
                            name="Secret Project"
                            setSelectedProject={setSelectedProject}
                        >
                            <div className="min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700" />
                        </ProjectLink>
                    </div>
                </motion.nav>
                </div>
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectNavigation
                        id="project-navigation"
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        isOpen={isOpen}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Page;
