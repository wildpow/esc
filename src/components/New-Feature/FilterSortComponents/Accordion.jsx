import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { fonts, colors } from "../../../styles/theme.styled";

const AccordionWrapper = styled.div`
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.accordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  
  background-color: white;
  font-family: ${fonts.sans};
  background-color: white;
  display: flex;
  flex-direction: column;
  label {
    padding-left: 20px;
    padding-bottom: 15px;
    color: ${colors.gray["700"]};
    pointer-events: none;
  }
  label:last-child {
    padding-bottom: 20px;
  }
}


`;
export default function Accordion({ title, children }) {
  return (
    <AccordionWrapper>
      <button type="button" className="accordion">
        {title}
      </button>
      <div className="panel">{children}</div>
    </AccordionWrapper>
  );
}
Accordion.defaultProps = {
  title: "Default Title",
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
