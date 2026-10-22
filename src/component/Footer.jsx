import React from 'react'

export default function Footer() {
    return (
        <>

            <footer className="bg-[#252641] text-white py-8 md:py-12 px-4">
                <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-8 text-center">

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
                        <img className="w-12 sm:w-16 h-auto" src="./Navlogo.png" alt="Virtual Class logo" />
                        <h2 className="font-bold text-xl md:text-2xl">Virtual Class for Zoom</h2>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full">
                        <h3 className="font-bold text-lg md:text-xl">Subscribe to get our Newsletter</h3>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full max-w-sm rounded-2xl border border-white bg-transparent px-4 py-2 text-center placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#49BBBD]"
                        />
                    </div>

                    <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm md:text-base">
                        <a href="#" className="hover:text-[#49BBBD] transition">Careers</a>
                        <a href="#" className="hover:text-[#49BBBD] transition">Privacy Policy</a>
                        <a href="#" className="hover:text-[#49BBBD] transition">Terms &amp; Conditions</a>
                    </nav>

                    <p className="text-xs md:text-sm text-white/70">© 2021 Class Technologies Inc.</p>

                </div>
            </footer>




        </>
    )
}
