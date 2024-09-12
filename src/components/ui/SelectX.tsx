"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Linkedin } from "lucide-react"

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

const frameworks = [
  {
    value: "White British",
    label: "White British",
    category: "White" ,
  },
  {
    value: "White lrish",
    label: "White lrish",
    category: "White" ,
  },
  {
    value: "Other white Background",
    label: "Other white Background",
    category: "White" ,
  },



  {
    value: "Asian Indian",
    label: "Asian Indian",
    category: "Asian" ,
  }, {
    value: "Asian Pakistani",
    label: "Asian Pakistani",
    category: "Asian" ,
  }, {
    value: "Asian Bangladeshi",
    label: "Asian Bangladeshi",
    category: "Asian" ,
  }, {
    value: "Other Chinese",
    label: "Other Chinese",
    category: "Asian" ,
  },
  {
    value: "Black Carbbean",
    label: "Black Carbbean",
    category: "Black",
  },
  {
    value: "Black African",
    label: "Black African",
    category: "Black",
  },
  /*{
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },*/
]

export function X() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] justify-between"
      >
        {value
          ? frameworks.find((framework) => framework.value === value)?.label
          : "Ethnicity"}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="ch frSearamework..." />
        <CommandList>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
                className={framework.category === "Black" ? "category-1-style" : "category-2-style"}
              >
                <div className="framework-item">
                  {framework.category !== undefined && (
                    <div className="category-label">{` ${framework.category}:`}</div>
                    
                    
                  )}
                  <div className="framework-label">
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
)
}
