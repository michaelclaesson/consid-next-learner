import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-center bg-neutral-300 p-8 mt-auto">
            © {new Date().getFullYear()} Consid Borås AB. All rights reserved.
        </div>
    );
};

export default Footer;
