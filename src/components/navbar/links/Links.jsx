"use client"
import Link from "next/link";
import styles from "./links.module.css";
import Navlink from "./navlink/navLink";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blog",
    path: "/blog"
  }
];
const Links = () => {
const[open, setOpen] = useState(false);
const session = true;
const isAdmin = true;

  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map(link => (
       
        <Navlink item={link} key={link.title}/>
      ))}{
        session ? (
          <>
          {
            isAdmin && (
              <Navlink item={{title: "Admin", path: "/admin"}} />
            )
          }
          <button className={styles.logout}>Logout</button>
          </> 
        ) : (
          <Navlink item={{title: "Login", path: "/login"}} />
        )
      }
    </div>
    <button className={styles.menuButton} onClick={() => {setOpen((prev) => !prev)}}>menu</button>
    {open && (
      <div className={styles.mobileLinks}>
         {links.map(link => (
       
       <Navlink item={link} key={link.title}/>
     ))}
      </div>
    )

    }
    </div>
  );
};

export default Links;
