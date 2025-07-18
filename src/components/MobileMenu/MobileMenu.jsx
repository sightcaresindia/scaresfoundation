import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '#',
        submenu: ""
    },
    {
        id: 2,
        title: 'About Us',
        link: 'about-us',
        submenu: [
            {
                id: 21,
                title: 'Mission & Vision',
                link: '#'
            },
            {
                id: 22,
                title: 'Our Story',
                link: '#'
            },
            {
                id: 23,
                title: 'Leadership & Team',
                link: '#'
            },
            {
                id: 24,
                title: 'Partners & Collaborators',
                link: '#'
            },
            {
                id: 25,
                title: 'Where We Work',
                link: '#'
            },
            {
                id: 26,
                title: 'Our Future Plan',
                link: '#'
            },
        ]
    },

    {
        id: 3,
        title: 'Programs',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'Medical Guidance',
                link: '#',
            },
            {
                id: 32,
                title: 'Subsidized Surgeries',
                link: '#',
            },
            {
                id: 33,
                title: 'Pre and post-surgery',
                link: '#',
            },
            {
                id: 34,
                title: 'Medicines & Assistive Devices',
                link: '#',
            },
            {
                id: 35,
                title: 'Eye Camps & Screenings',
                link: '#',
            },
            {
                id: 36,
                title: 'Awareness & Advocacy',
                link: '#',
            }, 
        ]
    },
    {
        id: 4,
        title: 'Campaigns',
        link: '#',
        submenu: [
            {
                id: 41,
                title: 'Medical Guidance',
                link: '#',
            },
            {
                id: 42,
                title: 'Subsidized Surgeries',
                link: '#',
            },
            {
                id: 43,
                title: 'Pre and post-surgery',
                link: '#',
            },
            {
                id: 44,
                title: 'Medicines & Assistive Devices',
                link: '#',
            },
            {
                id: 45,
                title: 'Eye Camps & Screenings',
                link: '#',
            },
            {
                id: 46,
                title: 'Awareness & Advocacy',
                link: '#',
            },
        ]
    },
  
    {
        id: 7,
        title: 'Shop',
        link: '#',
        submenu: [
            {
                id: 71,
                title: 'Shop',
                link: '/shop'
            },
            {
                id: 72,
                title: 'Shop Single',
                link: '/shop-single/prayer-mat'
            },
            {
                id: 73,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 74,
                title: 'Checkout',
                link: '/checkout'
            },
          
        ]
    },

    {
        id: 6,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 61,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 62,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 63,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 64,
                title: 'Blog single',
                link: '/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
            },
            {
                id: 65,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
            },
            {
                id: 66,
                title: 'Blog details fullwidth',
                link: '/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
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
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;