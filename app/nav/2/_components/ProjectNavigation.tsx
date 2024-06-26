// import {
//     AdjustmentsHorizontalIcon,
//     ArrowTrendingUpIcon,
//     BoltIcon,
//     CursorArrowRaysIcon,
//     PencilIcon,
//     UserGroupIcon,
//     UserIcon,
//     XMarkIcon,
//   } from "@heroicons/react/24/outline"
  import { motion } from "framer-motion"
  import NavigationLink from "./NavigationLink"
import { Bolt, MousePointer, PencilIcon, SlidersHorizontal, TrendingUp, UserIcon, UsersRound, X } from "lucide-react"
  
  const variants = {
    close: {
      x: -300,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 100,
    },
  }
  
  interface Props {
    id: string
    selectedProject: string
    isOpen: boolean
    setSelectedProject: (project: string | null) => void
  }
  
  const ProjectNavigation = ({
    id,
    selectedProject,
    isOpen,
    setSelectedProject,
  }: Props) => {
    return (
      <motion.nav
        variants={variants}
        initial="close"
        id={id}
        animate="open"
        exit="close"
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={`h-full min-h-screen flex flex-col gap-8 w-64 absolute bg-secondary ml-0 z-50 ${
          isOpen ? "left-64" : "left-20"
        } border-r border-secondary-foreground/20 p-5`}
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <h1 className="tracking-wide text-secondary-foreground/80 text-lg">
            {selectedProject}
          </h1>
          <button onClick={() => setSelectedProject(null)}>
            <X className="w-8 stroke-secondary-foreground/60" />
          </button>
        </div>
        <input
          placeholder="Search"
          type="text"
          className="px-3 py-2 tracking-wide rounded-lg bg-background text-muted-foreground/80"
        />
        <div className="flex flex-col gap-3">
          <NavigationLink name="Progress"
          href=""
          active={false}
          >
            <TrendingUp className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Team Members"
          href=""
          active={false}
          >
            <UsersRound className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="In Review"
          href=""
          active={false}
          >
            <PencilIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="In Progress"
          href=""
          active={false}
          >
            <Bolt className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Up Next"
          href=""
          active={false}
          >
            <MousePointer className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Project Settings"
          href=""
          active={false}
          >
            <SlidersHorizontal className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="tracking-wide text-secondary-foreground/80">Team Members</h1>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70" />
            <p className="tracking-wide text-secondary-foreground/60">Steve Jobs</p>
          </a>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70" />
            <p className="tracking-wide text-secondary-foreground/60">Bill Gates</p>
          </a>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70" />
            <p className="tracking-wide text-secondary-foreground/60">Jeff Bezos</p>
          </a>
        </div>
      </motion.nav>
    )
  }
  
  export default ProjectNavigation