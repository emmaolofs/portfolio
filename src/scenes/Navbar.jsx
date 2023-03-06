import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "underline decoration-dark-gray" : ""}
        hover:underline decoration-dark-gray`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
           {page} 
        </AnchorLink>
    )
}

const Navbar = ( { isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
    const navBarBackground = isTopOfPage ? "" : "bg-gray";

    return(
        <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
               <h4 className="font-playfair text-3xl font-bold">TT</h4> 

               {/* DESKTOP NAV */}
               {isAboveSmallScreen ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Work"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="About"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
               ) : (
               <button 
                    className="p-2"
                    onClick = {() => setIsMenuToggled(!isMenuToggled)}                   
               >             
                    <i class="fas fa-bars fa-2x"></i>    
               </button>)}

               {/* MOBILE MENU POPUP */}
               {!isAboveSmallScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-gray w-[300px]">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button 
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <i class="fas fa-times fa-2x"></i> 
                        </button>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Work"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                </div>
               )}
            </div>
        </nav>
    );
};

export default Navbar;


