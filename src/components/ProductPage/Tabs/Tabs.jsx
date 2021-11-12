import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { colors } from "../../../styles/theme.styled";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const TabsWrapper = styled.section`
  ul {
    display: flex;
    list-style: none;
    border-bottom: 4px solid ${colors.brandRed};
    padding-bottom: 2px;
    padding-left: 20px;
  }
`;
export default function Tabs() {
  const tabValues = {
    1: {
      title: "About us",
      ref: useRef(null),
    },
    2: {
      title: "Our Polices",
      ref: useRef(null),
    },
    3: {
      title: "Mattress Sizes",
      ref: useRef(null),
    },
    4: {
      title: "Our Products",
      ref: useRef(null),
    },
  };
  const [selectedTab, setSelectedTab] = useState(1);

  const handleClick = (index) => {
    setSelectedTab(index);
  };
  const handleNextTab = (firstTabInRound, nextTab, lastTabInRound) => {
    const tabToSelect =
      selectedTab === lastTabInRound ? firstTabInRound : nextTab;
    setSelectedTab(tabToSelect);
    tabValues[tabToSelect].ref.current.focus();
  };
  const handleKeyPress = (event) => {
    const tabCount = Object.keys(tabValues).length;

    if (event.key === "ArrowLeft") {
      const last = tabCount;
      const next = selectedTab - 1;
      handleNextTab(last, next, 1);
    }
    if (event.key === "ArrowRight") {
      const first = 1;
      const next = selectedTab + 1;
      handleNextTab(first, next, tabCount);
    }
  };
  return (
    <TabsWrapper>
      <ul role="tablist" aria-label="List of Tabs" onKeyDown={handleKeyPress}>
        <Tab
          id="firstTab"
          tabPanelId="firstTabPanel"
          index={1}
          handleChange={handleClick}
          selectedTab={selectedTab}
          tabRef={tabValues[1].ref}
          title={tabValues[1].title}
        />
        <Tab
          id="secondTab"
          tabPanelId="secondTabPanel"
          index={2}
          handleChange={handleClick}
          selectedTab={selectedTab}
          tabRef={tabValues[2].ref}
          title={tabValues[2].title}
        />
        <Tab
          id="thirdTab"
          tabPanelId="thirdTabPanel"
          index={3}
          handleChange={handleClick}
          selectedTab={selectedTab}
          tabRef={tabValues[3].ref}
          title={tabValues[3].title}
        />
        <Tab
          id="fourthTab"
          tabPanelId="fourthTabPanel"
          index={4}
          handleChange={handleClick}
          selectedTab={selectedTab}
          title={tabValues[4].title}
          tabRef={tabValues[4].ref}
        />
      </ul>
      <TabPanel
        id="firstTabPanel"
        tabId="firstTab"
        index={1}
        selectedTab={selectedTab}
      >
        We are a local, family owned, mattress store focused on helping people
        sleep better. Located in Everett, WA we service Everett, Mukilteo,
        Snohomish, Lake Stevens, Edmonds, Marysville, and the surrounding areas.
        We believe in serving our community and try to keep all our advertising
        local and support our local sports teams, charities, and schools. We are
        here to help educate you on sleep wellness and mattresses so you can
        find the bed of your dreams.
      </TabPanel>
      <TabPanel
        id="secondTabPanel"
        tabId="secondTab"
        index={2}
        selectedTab={selectedTab}
      >
        SAs local mattress store we strive to offer the best mattress selection,
        best services, best prices, and best policies. We have an unsurpassed
        365-night trial on new mattresses purchased from us so you can rest easy
        knowing we have you covered. Our low-price guarantee extends to 90
        nights after purchase, so you know you’re always getting the best deal
        around. See store for details.
      </TabPanel>
      <TabPanel
        id="thirdTabPanel"
        tabId="thirdTab"
        index={3}
        selectedTab={selectedTab}
      >
        Most mattresses are hand-made locally, and sizing may vary slightly but
        the standard dimensions are as follows. Twin 38 x 75 Twin XL 38 x 80
        Full 54 x 75 Queen 60 x 80 King 76 x 80 Cal. King 72 x 84
      </TabPanel>
      <TabPanel
        id="fourthTabPanel"
        tabId="fourthTab"
        index={4}
        selectedTab={selectedTab}
      >
        As a family owned business, we hand-pick every product we carry and
        believe they are the best options for the money. We are a licensed
        retailer for all brands we carry, including Tempur-Pedic, Stearns &
        Foster, Sealy, Nectar, Posh + Lavish Latex, Personal Comfort, Human
        Touch, X-Chair and DreamFit. As a licensed retailer all our products are
        backed by a manufacturer’s warranty against defect.
      </TabPanel>
    </TabsWrapper>
  );
}
