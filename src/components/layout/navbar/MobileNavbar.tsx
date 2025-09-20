import { useState } from "react";
import { Logo } from "../../ui/Logo";
import { Sheet, SheetContent, SheetTrigger, SheetOverlay } from "../../ui/sheet";
import { MobileMenuButton } from "./MobileMenuButton";
import type { INavbarData } from "./navbar.types";
import { Button } from "../../ui/Button";
import navbarMenuArrow from "../../../../public/navbarMenuArrow.svg"

export const MobileNavbar = ({ data }: { data: INavbarData[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-7">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between px-7 py-5 rounded-b-3xl mb-9">
          <Logo />
          <SheetTrigger>
            <MobileMenuButton isOpen={isOpen} />
          </SheetTrigger>
        </div>
        <SheetOverlay className="bg-grey" />
        <SheetContent side="top" className="rounded-xl py-1 mx-auto w-[calc(100vw-2*3rem)] px-2">
          <div className="mb-5 bg-background rounded-2xl">
            {data.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-full flex justify-between items-center px-4 py-3 text-blackblur hover:bg-gray-200 rounded-lg transition-colors">
                {item.title}
                <img src={navbarMenuArrow} alt="" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="default" className="w-full bg-primary rounded-xl" size="lg">
              Sign In
            </Button>
            <Button variant="secondary" className="w-full bg-secondary rounded-xl" size="lg">
              Register
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};































// export const MobileNavbar = ({ data }: { data: INavbarData[] }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="px-7 rounded-b-3xl">
//       <div className="flex items-center justify-between px-7 py-5 mb-9 relative z-70">
//         <Logo />
//           <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
//       </div>
//       <Sheet open={isOpen} onOpenChange={setIsOpen}>
//         <SheetOverlay className="bg-grey"/>
//         <SheetContent
//           side="top"
//           className="rounded-xl py-1 mx-auto w-[calc(100vw-2*3rem)] px-2"
//         >
//           <div className="mb-5">
//             {data.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="w-full flex justify-between items-center px-4 py-3 text-blackblur"
//               >
//                 {item.title}
//                 <svg
//                   className="w-4 h-4 text-gray-700 opacity-9"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </a>
//             ))}
//           </div>

//           <div className="flex flex-col gap-2">
//             <Button variant="default" className="w-full bg-primary">
//               Sign In
//             </Button>
//             <Button variant="secondary" className="w-full bg-secondary">
//               Register
//             </Button>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </nav>
//   );
// };
