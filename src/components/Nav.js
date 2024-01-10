import styles from "./Nav.module.css";

import arrow from "../images/arrowDown.svg";
import logo from "../images/logo.png";
import home from "../images/home.svg";
import order from "../images/order.svg";
import product from "../images/product.svg";
import delivery from "../images/delivery.svg";
import marketing from "../images/marketing.svg";
import analytics from "../images/analytics.svg";
import payout from "../images/payout.svg";
import discount from "../images/discount.svg";
import audience from "../images/audience.svg";
import appearance from "../images/appearance.svg";
import plugin from "../images/plugin.svg";

import credit from "../images/credit.svg";

function Nav() {
  return (
    <div className={styles.navCont}>
      <div className={styles.logoCont}>
        <div className="d-flex">
          <img src={logo} alt="logo" />
          <div className={styles.logoDesc}>
            <p className="color-white weight-500">Nishyan</p>
            <p className="font-13 underline color-white">Visit store</p>
          </div>
        </div>
        <img src={arrow} alt="arrow down" />
      </div>
      <nav>
        <ul>
          <li>
            <img src={home} alt="homeIcon" />
            Home
          </li>
          <li>
            <img src={order} alt="orderIcon" />
            Orders
          </li>

          <li>
            <img src={product} alt="productIcon" />
            Products
          </li>

          <li>
            <img src={delivery} alt="deliveryIcon" />
            Delivery
          </li>

          <li>
            <img src={marketing} alt="marketingIcon" />
            Marketing
          </li>

          <li>
            <img src={analytics} alt="analyticsIcon" />
            Analytics
          </li>

          <li className={styles.active}>
            <img src={payout} alt="payoutIcon" />
            Payouts
          </li>

          <li>
            <img src={discount} alt="discountIcon" />
            Discounts
          </li>

          <li>
            <img src={audience} alt="audienceIcon" />
            Audience
          </li>

          <li>
            <img src={appearance} alt="appearanceIcon" />
            Appearance
          </li>

          <li>
            <img src={plugin} alt="pluginIcon" />
            Plugins
          </li>
        </ul>
      </nav>

      <div className={styles.creditDiv}>
        <div className="d-flex">
          <img src={credit} alt="credit-logo" />
          <div className={styles.logoDesc}>
            <p className="color-white  font-13">Available credits</p>
            <p className="weight-500 color-white">222.10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
