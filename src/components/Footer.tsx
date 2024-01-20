import React from "react";

const Footer = React.memo(() => {
    return (
        <footer
            className="footer text-white border border-t-[#33353F]
         border-l-transparent border-r-transparent border-b-transparent"
        >
            <div className="container p-6 md:p-12 flex justify-between items-center">
                <span className="md:text-lg text-sm font-semibold">
                    Myshinsky I 2023
                </span>
                <p className="text-slate-700 text-sm md:text-base">
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
});

export default Footer;
