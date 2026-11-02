'use client'
import React from "react";
import HeaderS3 from "@/components/headerS3/HeaderS3";

export default function Navbar(props) {
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 80);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const className = isSticky ? "fixed-navbar active" : "fixed-navbar";

    return (
        <div className={className}>
            <HeaderS3 hclass={props.hclass} Logo={props.Logo} topbarClass={props.topbarClass} />
        </div>
    );
}
