import { useState } from "react";
import { FaBurger, FaBasketShopping  } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
// import BasketList from "./basket/BasketList";
import styles from "./globalNavigation.module.css";
// import { useBasket } from "../../hooks/useBasketHook";

const GlobalNavigation = () => {

    const [mainNavigationOpen, setMainNavigationOpen] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);

    // const {basket} = useBasket();

    const openNavigationCls = mainNavigationOpen ? styles.open : "";
    const openBasketCls = basketOpen ? styles.open : "";

    return (
        <div className={styles.navigation}>

            <div className={styles.bar}>
                
                <div className={styles.logo}>

                    <Link to="/"><img src="/smuknu_logo.png" height="40px"></img></Link>

                </div>

                <div className={styles.actions}>

                    <div className={styles.basket} onClick={() => setBasketOpen(!basketOpen)}>
                        <FaBasketShopping />
                        {/* <span className={styles.quantity}>{basket.length}</span> */}
                    </div>

                    <div onClick={() => setMainNavigationOpen(!mainNavigationOpen)}>

                        <FaBurger />

                    </div>

                </div>
                
            </div>

            <div className={`${styles.dropdown} ${styles.nav} ${openNavigationCls}`} onClick={() => setMainNavigationOpen(false)}>

                <NavLink to="/"  className={({ isActive }) => isActive ? styles.active : ""}> Forsiden</NavLink>
                <NavLink to="/produkter"  className={({ isActive }) => isActive ? styles.active : ""}> Vores Produkter</NavLink>
                <NavLink to="/spørg-om-sundhed"  className={({ isActive }) => isActive ? styles.active : ""}> Spørg om sundhed</NavLink>
                <NavLink to="/bliv-medlem"  className={({ isActive }) => isActive ? styles.active : ""}> Bliv Medlem</NavLink>

            </div>

            <div className={`${styles.dropdown} ${styles.basket} ${openBasketCls}`}>
                {/* <BasketList></BasketList> */}
            </div>

        </div>
    );


};

export default GlobalNavigation;