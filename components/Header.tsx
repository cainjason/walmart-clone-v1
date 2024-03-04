import Image from "next/image";
import Link from "next/link";
import {
	Grid2X2,
	Heart,
	LayoutGrid,
	Search,
	ShoppingCart,
	User,
} from "lucide-react";

function Header() {
  return (
    <header className="flex bg-walmart">
			<Link href='/' className="">
				<Image
					src="https://links.papareact.com/yur"
					alt="Logo"
					width={150}
					height={150} 
						/>
			</Link>
			<form className="flex items-center bg-white rounded-full w-full flex-1">
				<input 
					type='text' 
					placeholder="Search Everything..."
					className="flex-1"
				/>
				<button>
					<Search className="rounded-full h-10"
					
					/>
				</button>
			</form>
    </header>
  )
}

export default Header;
