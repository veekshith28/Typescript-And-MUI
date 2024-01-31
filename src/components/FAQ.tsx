import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ: React.FC<FAQProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        fontWeight={"bold"}
        onClick={handleClick}
      >
        {props.question}
        <ArrowDropDown className={`arrow-icon ${isOpen ? "open" : ""}`}>
          {" "}
          icon
        </ArrowDropDown>
      </Box>
      {isOpen && <Box maxWidth={"450px"} marginTop={"8px"}>{props.answer}</Box>}
    </Box>
  );
};

export default FAQ;

