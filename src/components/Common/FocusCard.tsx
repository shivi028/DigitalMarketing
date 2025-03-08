import { FocusCards } from "@/components/ui/focus-cards";

interface FocusCardProps {
  cards: {
    title: string;
    src: string;
  }[];
}

export function FocusCard({ cards }: FocusCardProps) {
  return(
    <div className="">
         <FocusCards cards={cards} />;
    </div>
  
)
}
