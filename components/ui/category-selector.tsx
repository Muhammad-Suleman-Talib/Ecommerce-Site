// 'use client'
// import { Category } from '@/sanity.types'
// import React, { useState } from 'react'

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { Check, ChevronsUpDown } from 'lucide-react'
// import { useRouter } from 'next/navigation'
 
// interface CategorySelectorProps {
//     categories: Category[]
// }


// export default function CategorySelector({categories}: CategorySelectorProps) {
//     const [open, setOpen] = React.useState(false)
//   const [value, setValue] = React.useState("")
//   const router = useRouter()
 
//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? categories.find((category) => category._id === value)?.title
//             : "Select Category..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search category..." />
//           <CommandList>
//             <CommandEmpty>No category found.</CommandEmpty>
//             <CommandGroup>
//               <CommandItem
//                 value="*"
//                 onSelect={() => {
//                   setValue("*")
//                   setOpen(false)
//                   router.push(`/product?categories${categories}`)
//                 }}
//               >
//                 All
//               </CommandItem>
//               {categories.map((categories) => (
//                 <CommandItem
//                   key={categories._id}
//                   value={categories._id}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? "" : currentValue)
//                     setOpen(false)
//                     router.push(`/categories${categories.slug?.current}`)
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value === categories._id ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                   {categories.title}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
    
// }


'use client'
import { Category } from '@/sanity.types'
import React, { useState } from 'react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CategorySelectorProps {
  categories: Category[]
}

export default function CategorySelector({ categories }: CategorySelectorProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-gradient-to-r from-blue-600 to-yellow"

        >
          {value
            ? categories.find((category) => category._id === value)?.title
            : "Select Category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="*"
                onSelect={() => {
                  setValue("*")
                  setOpen(false)
                  router.push(`/product?categories=all`)
                }}
              >
                All
              </CommandItem>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category._id}
                  onSelect={() => {
                    setValue(category._id)
                    setOpen(false)
                    router.push(`/categories/${category.slug?.current}`)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category._id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
