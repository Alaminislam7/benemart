import Image from "next/image";
import Link from "@/components/ui/link";

const data = {
  exclusiveName: "New Year Exclusive",
	year: 2022,
	exclusiveData: [
		{
			id: 1,
			slug: "/search",
			buttonText: "Women Exclusive",
			image: "/assets/images/exclusive/women.png",
			backgroundColor: "bg-gray-150",
		},
		{
			id: 2,
			slug: "/search",
			buttonText: "Men Exclusive",
			image: "/assets/images/exclusive/men.png",
			backgroundColor: "bg-linenSecondary",
		},
	],
}

interface Props {
	className?: string;
}

const ExclusiveBlock: React.FC<Props> = ({
  className = "",
}) => {
    return (
      <div>
        exclusive 
      </div>
    )
}

export default ExclusiveBlock;