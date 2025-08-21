import { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

// Container for whole section
const Container = styled.div`
  width: 70%;
  margin: 2rem auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

// Card wrapper
const CardWrapper = styled.div`
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background: #ffffff;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

// Accordion button
const Button = styled.button`
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937; /* gray-800 */
  background-color: #f9fafb; /* gray-50 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6; /* gray-100 */
  }
`;

// Title inside button
const Title = styled.span`
  flex: 1;
  text-align: left;
`;

// Arrow icon
const Arrow = styled.span`
  font-size: 1rem;
  margin-left: 10px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

// Accordion content
const AccordionContent = styled.div`
  padding: 1rem 1.25rem;
  background: #fff;
  font-size: 0.95rem;
  color: #4b5563; /* gray-600 */
  line-height: 1.5;
  border-top: 1px solid #e5e7eb;
`;

const RecommendedCard = ({ recommendedRes }) => {
  const [openIndex1, setOpenIndex1] = useState(1);
  const [index, setIndex] = useState(0);

  const toggle2 = (i) => {
    setIndex(i);
    openIndex1 === 1 ? setOpenIndex1(0) : setOpenIndex1(1);
  };

  return (
    <Container>
      {recommendedRes.map((item, i) => (
        <CardWrapper key={i}>
          <Button onClick={() => toggle2(i)}>
            <Title>{item.card.card.title}</Title>
            <Arrow open={index === i && openIndex1 === 1}>▼</Arrow>
          </Button>

          {index === i && (
            <AccordionContent>
              <Accordion
                key={i}
                itemCards={item.card.card.itemCards}
                openIndex1={openIndex1}
                index={index}
              />
            </AccordionContent>
          )}
        </CardWrapper>
      ))}
    </Container>
  );
};

export default RecommendedCard;
