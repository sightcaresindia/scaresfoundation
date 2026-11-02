import React, { Fragment, useState } from 'react';
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        submenu: ""
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about-us',
        submenu: ""
    },
    {
        id: 4,
        title: 'Campaigns',
        link: '/our-campaigns',
        submenu: ""
    },
    {
        id: 5,
        title: 'Resources',
        link: '#',
        submenu: [
            {
                id: 51,
                title: 'FAQs on Eye Health',
                link: '/faqs',
            },
            {
                id: 52,
                title: 'Government Schemes & Support',
                link: '/resources/government-schemes-and-support',
            },
            {
                id: 53,
                title: 'Medical & Surgery Process Guide',
                link: '/resources/medical-and-surgery-process-guide',
            },
        ]
    },
    {
        id: 6,
        title: 'Get Involved',
        link: '/get-involved',
        submenu: [
            {
                id: 61,
                title: 'Volunteer Opportunities',
                link: '/get-involved/volunteer-opportunities'
            },
            {
                id: 62,
                title: 'Corporate Partnerships',
                link: '/get-involved/corporate-partnerships'
            },
            {
                id: 63,
                title: 'Fundraising & Campaigns',
                link: '/get-involved/fundraising-and-campaigns'
            },
            {
                id: 64,
                title: 'Internship Programs',
                link: '/get-involved/internship-programs'
            },
        ]
    },
    {
        id: 77,
        title: 'Blogs',
        link: '/blogs',
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact-us',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        setMenuState(false);
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <li className={item.id === openId ? 'active' : undefined} key={item.id}>
                                {item.submenu ?
                                    <Fragment>
                                        <button type="button" className="mobile-submenu-toggle"
                                            aria-expanded={item.id === openId} aria-controls={`mobile-submenu-${item.id}`}
                                            onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </button>
                                        {item.id === openId && (
                                            <ul className="subMenu" id={`mobile-submenu-${item.id}`}>
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <li key={submenu.id}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </Fragment>
                                            </ul>
                                        )}
                                    </Fragment>
                                    : <Link onClick={ClickHandler} className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </li>
                        )
                    })}
                </ul>
                <div className="mobile-menu-donate">
                    <Link
                        href="/campaign/be-the-light-in-anamika-s-world"
                        className="mobile-menu-donate-button"
                        onClick={() => {
                            setMenuState(false);
                            ClickHandler();
                        }}
                    >
                        Donate Now
                    </Link>
                </div>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn" aria-label="Toggle navigation" aria-expanded={menuActive}>
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
