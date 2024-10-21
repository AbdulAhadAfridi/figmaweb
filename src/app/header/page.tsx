import Wrapper from "@/app/component/Wrapper"
import Link from "next/link";


export default Header
function Header(){
    return(<div>
      {/* Header Section */}
<Wrapper>
      <header className="bg-green-50 sticky-top-0">
        <div className="flex justify-between px-4">
          <div className="flex space-x-5"> 
          <div className="text-2xl font-bold mt-1 ">CHEAMIND</div>
          </div>
          <nav className="space-x-6 mt-1">
            <a href="http://localhost:3000" className="hover:text-blue-600">Home</a>
            <Link href="http://localhost:3000/product" className="hover:text-blue-600">Products</Link>
            <a href="http://localhost:3000/contact" className="hover:text-blue-600">Contacts</a>
          </nav>
        </div>
      </header>
</Wrapper>
</div>
    );
}