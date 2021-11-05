import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';
import styles from './sidebar.module.css';

const SideBar = () => {
    const [opened,setIsOpened] = useState(false);
    const ref = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpened(false);
            };
        };

        if (opened) {
            document.addEventListener('click',handleClickOutside);
        };
        return () => {
            document.removeEventListener('click',handleClickOutside);
        };
    },[opened]);

    const renderMenu = () => {
        return (
            <nav ref={ref} className={`${styles.navbar} ${opened ? styles.open : ''}`}>
                <Link to="/main" className={styles.item} onClick={() => setIsOpened(false)}>
                    <AiIcons.AiFillHome size="24"/>
                    <span className={styles.text}>Home</span>
                </Link>
                <Link to="/products" className={styles.item} onClick={() => setIsOpened(false)}>
                    <FaIcons.FaCartPlus size="24"/>
                    <span className={styles.text}>Products</span>
                </Link>
                <Link to="/team" className={styles.item} onClick={() => setIsOpened(false)}>
                    <IoIcons.IoMdPeople size="24"/>
                    <span className={styles.text}>Team</span>
                </Link>
                <Link to="/support" className={styles.item} onClick={() => setIsOpened(false)}>
                    <IoIcons.IoMdHelpCircle size="24"/>
                    <span className={styles.text}>Support</span>
                </Link>
            </nav>
        );
    };

    const renderMainIcon = () => {
        let component = null;
        if (opened) {
            component = (
                <div className={styles.close}>
                    <Link to="#">
                        <AiIcons.AiOutlineClose 
                            size="24"
                            onClick={() => setIsOpened(!opened)}
                        />
                    </Link>
                </div>
            );
        } else {
            component = (
                <Link to='#' className={styles.bars}>
                    <FaIcons.FaBars 
                        size="24"
                        onClick={() => setIsOpened(!opened)}
                    />
                </Link>
            );
        };
        return component;
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={styles.menu}>
                {renderMainIcon()}
                {renderMenu()}
            </div>
        </IconContext.Provider>
    );
};

export default SideBar
