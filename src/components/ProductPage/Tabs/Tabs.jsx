import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { colors, fonts, fontSize } from "../../../styles/theme.styled";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import { useWindowSize } from "../../../contexts/WindowSize.ctx";
import { Description } from "../productPage.styled";

const TabDescription = styled(Description)`
  padding-right: 0;
  padding-left: 0;
  padding: 0;
  @media (min-width: 550px) {
    padding: 0;
  }
  @media (min-width: 1300px) {
    padding: 0;
  }
`;
const Select = styled.select`
  width: 100%;
  text-align: center;
  border: 4px solid ${colors.brandRed};
  border-bottom: none;
  padding: 10px 0;
  font-weight: 700;
  color: ${colors.blue[900]};
  font-family: ${fonts.sans};
  font-size: ${fontSize["2xl"]};
  transition: all 0.2s ease;
  cursor: pointer;
  :hover {
    background-color: ${colors.red[900]};
    color: ${colors.gray[100]};
  }
`;
const TabsWrapper = styled.section`
  margin-bottom: 50px;
  .tabPanelWrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 4px solid ${colors.brandRed};
    border-left: 4px solid ${colors.brandRed};
    border-right: 4px solid ${colors.brandRed};
    position: relative;
    /* ::after {
      top: 0px;
      left: 0px;
      content: "";
      width: 100%;
      z-index: 1;
      height: 4px;
      position: absolute;
      background-color: ${colors.brandRed};
    } */
  }
  ul {
    display: flex;
    list-style: none;
    /* border-bottom: 4px solid ${colors.brandRed}; */
    padding-bottom: 2px;
    padding: 0;
    /* padding-bottom: 16px; */
    margin-bottom: 0;
  }
`;
export default function Tabs() {
  const { width } = useWindowSize();
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
      {width <= 560 ? (
        <Select
          name="test"
          id="test"
          onChange={(e) => handleClick(Number(e.target.value))}
        >
          <option value={1}>{tabValues[1].title}</option>
          <option value={2}>{tabValues[2].title}</option>
          <option value={3}>{tabValues[3].title}</option>
          <option value={4}>{tabValues[4].title}</option>
        </Select>
      ) : (
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
      )}
      <div className="tabPanelWrapper">
        <TabPanel
          id="firstTabPanel"
          tabId="firstTab"
          index={1}
          selectedTab={selectedTab}
        >
          <TabDescription>
            We are a local, family owned, mattress store focused on helping
            people sleep better. Located in Everett, WA we service Everett,
            Mukilteo, Snohomish, Lake Stevens, Edmonds, Marysville, and the
            surrounding areas. We believe in serving our community and try to
            keep all our advertising local and support our local sports teams,
            charities, and schools. We are here to help educate you on sleep
            wellness and mattresses so you can find the bed of your dreams.
          </TabDescription>
        </TabPanel>
        <TabPanel
          id="secondTabPanel"
          tabId="secondTab"
          index={2}
          selectedTab={selectedTab}
        >
          <TabDescription>
            As local mattress store we strive to offer the best mattress
            selection, best services, best prices, and best policies. We have an
            unsurpassed 365-night trial on new mattresses purchased from us so
            you can rest easy knowing we have you covered. Our low-price
            guarantee extends to 90 nights after purchase, so you know you’re
            always getting the best deal around. See store for details.
          </TabDescription>
        </TabPanel>
        <TabPanel
          id="thirdTabPanel"
          tabId="thirdTab"
          index={3}
          selectedTab={selectedTab}
        >
          <TabDescription>
            Most mattresses are hand-made locally, and sizing may vary slightly
            but the standard dimensions are as follows.
          </TabDescription>
          <div className="tableFlex">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Width</th>
                  <th>Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Twin</td>
                  <td>38&quot;</td>
                  <td>75&quot;</td>
                </tr>
                <tr>
                  <td>Twin XL</td>
                  <td>38&quot;</td>
                  <td>80&quot;</td>
                </tr>
                <tr>
                  <td>Full</td>
                  <td>54&quot;</td>
                  <td>75&quot;</td>
                </tr>
                <tr>
                  <td>Queen</td>
                  <td>60&quot;</td>
                  <td>80&quot;</td>
                </tr>
                <tr>
                  <td>King</td>
                  <td>76&quot;</td>
                  <td>80&quot;</td>
                </tr>
                <tr>
                  <td>Cal. King</td>
                  <td>72&quot;</td>
                  <td>84&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel
          id="fourthTabPanel"
          tabId="fourthTab"
          index={4}
          selectedTab={selectedTab}
        >
          <TabDescription>
            As a family owned business, we hand-pick every product we carry and
            believe they are the best options for the money. We are a licensed
            retailer for all brands we carry, including Tempur-Pedic, Stearns &
            Foster, Sealy, Nectar, Posh + Lavish Latex, Personal Comfort, Human
            Touch, X-Chair and DreamFit. As a licensed retailer all our products
            are backed by a manufacturer’s warranty against defect.
          </TabDescription>
        </TabPanel>
      </div>
    </TabsWrapper>
  );
}
