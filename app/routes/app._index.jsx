import { useLoaderData } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import styles from "../styles/dashboard.module.css";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const shopName = session.shop.replace('.myshopify.com', '');
  
  return { shopName };
};

export default function Dashboard() {
  const { shopName } = useLoaderData();

  return (
    <s-page heading="Dashboard" full-width>
      <div className={styles.dashboard}>
        {/* Header Row: Greeting + Hero */}
        <div className={styles.headerRow}>
          {/* Greeting Section */}
          <div className={styles.greeting}>
            <h2 className={styles.greetingText}>
              Hi, <span className={styles.shopName}>{shopName}</span>! 👋
            </h2>
            <p className={styles.greetingSubtext}>
              Here's your performance overview for today
            </p>
          </div>

          {/* Hero Section */}
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Maximize Your Revenue Across the Customer Journey</h1>
            <p className={styles.heroSubtitle}>
              Drive conversions at every stage: Before Add to Cart, During Cart, and After Purchase
            </p>
          </div>
        </div>

        {/* Performance Overview Section */}
        <div className={styles.performanceSection}>
          <h2 className={styles.performancetitle}>Performance Statistics</h2>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>$10,840</div>
              <div className={styles.metricLabel}>Total Revenue Generated</div>
              <div className={styles.metricTrend}>↑ 24% vs last month</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>30.2%</div>
              <div className={styles.metricLabel}>Average AOV Increase</div>
              <div className={styles.metricTrend}>↑ 5.3% vs last month</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>2,847</div>
              <div className={styles.metricLabel}>Customers Converted</div>
              <div className={styles.metricTrend}>↑ 18% vs last month</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>68%</div>
              <div className={styles.metricLabel}>Offer Acceptance Rate</div>
              <div className={styles.metricTrend}>↑ 3% vs last month</div>
            </div>
          </div>
        </div>

        {/* Funnel Stages Section */}
        <div className={styles.funnelSection}>
          <h2 className={styles.funnelTitle}>Revenue Optimization Stages</h2>
          <div className={styles.funnelGrid}>
            {/* Stage 1: Before Add to Cart */}
          <div className={styles.funnelStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageHeaderTop}>
                <div className={styles.stageBadge}>Stage 1</div>
                <h2 className={styles.stageTitle}>Before Add to Cart</h2>
              </div>
              <div className={styles.aovMetric}>
                <div className={styles.aovValue}>+28.5%</div>
                <div className={styles.aovLabel}>AOV Increase</div>
              </div>
              <p className={styles.stageDescription}>
                Capture customer interest with compelling bundles and offers on product pages
              </p>
            </div>

            <div className={styles.stageContent}>
              <div className={styles.offerTypes}>
                <div className={styles.offerCard}>
                  <div className={styles.offerIcon}>📦</div>
                  <div className={styles.offerInfo}>
                    <h4 className={styles.offerName}>Bundles</h4>
                    <div className={styles.offerStats}>
                      <span className={styles.offerCount}>5 active</span>
                      <span className={styles.offerRevenue}>$2,450</span>
                    </div>
                  </div>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerIcon}>🎁</div>
                  <div className={styles.offerInfo}>
                    <h4 className={styles.offerName}>Free Gifts</h4>
                    <div className={styles.offerStats}>
                      <span className={styles.offerCount}>3 active</span>
                      <span className={styles.offerRevenue}>$890</span>
                    </div>
                  </div>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerIcon}>➕</div>
                  <div className={styles.offerInfo}>
                    <h4 className={styles.offerName}>Add-ons</h4>
                    <div className={styles.offerStats}>
                      <span className={styles.offerCount}>2 active</span>
                      <span className={styles.offerRevenue}>$650</span>
                    </div>
                  </div>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerIcon}>📊</div>
                  <div className={styles.offerInfo}>
                    <h4 className={styles.offerName}>Quantity Breaks</h4>
                    <div className={styles.offerStats}>
                      <span className={styles.offerCount}>2 active</span>
                      <span className={styles.offerRevenue}>$1,200</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.stageActions}>
                <s-button variant="primary" onClick={() => alert('Create new bundle')}>
                  + New Bundle
                </s-button>
                <s-button variant="secondary" onClick={() => alert('View all bundles')}>
                  View All
                </s-button>
              </div>
            </div>
          </div>

          {/* Stage 2: Cart - INCOMING */}
          <div className={`${styles.funnelStage} ${styles.comingSoon}`}>
            <div className={styles.comingSoonBadge}>
              <span className={styles.sparkle}>✨</span>
              Coming Soon
              <span className={styles.sparkle}>✨</span>
            </div>
            
            <div className={styles.stageHeader}>
              <div className={styles.stageHeaderTop}>
                <div className={`${styles.stageBadge} ${styles.stageBadgeDisabled}`}>Stage 2</div>
                <h2 className={styles.stageTitle}>Cart Page</h2>
              </div>
              <div className={`${styles.aovMetric} ${styles.aovMetricDisabled}`}>
                <div className={styles.aovValue}>--</div>
                <div className={styles.aovLabel}>AOV Increase</div>
              </div>
              <p className={styles.stageDescription}>
                Increase cart value with strategic upsells and cross-sells in the cart drawer
              </p>
            </div>

            <div className={styles.stageContent}>
              <div className={styles.teaserContent}>
                <div className={styles.teaserIcon}>🛒</div>
                <h3 className={styles.teaserTitle}>Powerful Cart Optimization Features</h3>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Cart Drawer Upsells
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Smart Cross-Sells
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Order Bumps
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Progressive Discounts
                  </li>
                </ul>
              </div>

              <div className={styles.stageActions}>
                <s-button variant="primary" disabled>
                  + New Cart Offer
                </s-button>
                <s-button variant="secondary" disabled>
                  View All
      </s-button>
              </div>
            </div>
          </div>

          {/* Stage 3: After Add to Cart */}
          <div className={styles.funnelStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageHeaderTop}>
                <div className={styles.stageBadge}>Stage 3</div>
                <h2 className={styles.stageTitle}>After Add to Cart</h2>
              </div>
              <div className={styles.aovMetric}>
                <div className={styles.aovValue}>+32.8%</div>
                <div className={styles.aovLabel}>AOV Increase</div>
              </div>
              <p className={styles.stageDescription}>
                Maximize revenue with post-purchase upsells and thank you page offers
              </p>
            </div>

            <div className={styles.stageContent}>
              <div className={styles.offerTypes}>
                <div className={styles.offerCard}>
                  <div className={styles.offerIcon}>⚡</div>
                  <div className={styles.offerInfo}>
                    <h4 className={styles.offerName}>One-Click Upsells</h4>
                    <div className={styles.offerStats}>
                      <span className={styles.offerCount}>5 active</span>
                      <span className={styles.offerRevenue}>$3,200</span>
                    </div>
                  </div>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerIcon}>🎉</div>
                  <div className={styles.offerInfo}>
                    <h4 className={styles.offerName}>Thank You Page Offers</h4>
                    <div className={styles.offerStats}>
                      <span className={styles.offerCount}>3 active</span>
                      <span className={styles.offerRevenue}>$1,450</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.stageActions}>
                <s-button variant="primary" onClick={() => alert('Create new offer')}>
                  + New Offer
          </s-button>
                <s-button variant="secondary" onClick={() => alert('View all offers')}>
                  View All
            </s-button>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* Preferred Partners Section */}
        <div className={styles.partnersSection}>
          <h2 className={styles.partnersTitle}>Preferred Partners</h2>
          <div className={styles.partnersGrid}>
            
            {/* Partner 1: Onially */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerBanner}>
                <img 
                  src="https://www.onially.com/cdn/shop/files/Logo_Onially_noir.png" 
                  alt="Onially"
                  className={styles.partnerBannerLogo}
                />
              </div>
              <div className={styles.partnerContent}>
                <h3 className={styles.partnerName}>Onially - After-sales service</h3>
                <p className={styles.partnerDescription}>
                  Professional customer service for e-commerce: brand and dropshipping. Complete management, virtual assistance, AI solutions.
                </p>
                <s-button variant="secondary" size="slim">
                  View App
                </s-button>
              </div>
            </div>

            {/* Partner 2: DECO */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerHeader}>
                <img 
                  src="https://cdn.shopify.com/app-store/listing_images/13484bd181d58bce4fa70e4baa708e2f/icon/CJuBqcmj-IYDEAE=.jpeg" 
                  alt="DECO Product Labels & Badges"
                  className={styles.partnerLogoImage}
                />
                <div className={styles.partnerRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.ratingText}>4.9 (781 Reviews)</span>
                </div>
              </div>
              <div className={styles.partnerContent}>
                <h3 className={styles.partnerName}>DECO Product Labels & Badges</h3>
                <p className={styles.partnerDescription}>
                  Boost sales with eye-catching badges, product labels & banner bars.
                </p>
                <s-button variant="secondary" size="slim">
                  View App
                </s-button>
              </div>
            </div>

            {/* Partner 3: Chazify */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerHeader}>
                <img 
                  src="https://cdn.shopify.com/app-store/listing_images/503a9dd92c4f92c285315f35dd858797/icon/CJr3ysaQrIQDEAE=.jpeg" 
                  alt="Chazify Product Reviews App"
                  className={styles.partnerLogoImage}
                />
                <div className={styles.partnerRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.ratingText}>5.0 (27 Reviews)</span>
                </div>
              </div>
              <div className={styles.partnerContent}>
                <h3 className={styles.partnerName}>Chazify – Product Reviews App</h3>
                <p className={styles.partnerDescription}>
                  Automate post-purchase reviews with Chazify and display them in fully customizable layouts to build trust and drive repeat sales — Compatible with Hydrogen.
                </p>
                <s-button variant="secondary" size="slim">
                  View App
                </s-button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
