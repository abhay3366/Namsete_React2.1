import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: #f7f7fb;
`;

const Card = styled.div`
  width: 100%;
  max-width: 560px;
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
`;

const IconWrap = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f0f3ff 0%, #fafbff 100%);
  border: 1px solid #eef0ff;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: #222;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #6b7280; /* slate-500 */
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryLink = styled(Link)`
  text-decoration: none;
  background: #111827; /* neutral-900 */
  color: #fff;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 6px 20px rgba(17, 24, 39, 0.15);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(17, 24, 39, 0.18);
  }
`;

const SecondaryLink = styled(Link)`
  text-decoration: none;
  color: #111827;
  background: #f3f4f6; /* gray-100 */
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 600;
  border: 1px solid #e5e7eb;
  transition: background 0.15s ease, transform 0.15s ease;
  &:hover {
    background: #eaecef;
    transform: translateY(-1px);
  }
`;

const SmallNote = styled.small`
  display: block;
  color: #9ca3af; /* gray-400 */
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, #eee 50%, rgba(0,0,0,0) 100%);
  margin: 8px 0 0;
`;

const EmptyCartCard = ({
  title = "Your cart is empty",
  subtitle = "Looks like you haven’t added anything yet.",
  browseHref = "/",
  wishlistHref = "/wishlist",
}) => {
  return (
    <Wrapper>
      <Card>
        <IconWrap>
          <FaShoppingCart size={40} color="#4b5563" />
        </IconWrap>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Actions>
          <PrimaryLink to={browseHref}>Start Shopping</PrimaryLink>
          <SecondaryLink to={wishlistHref}>View Wishlist</SecondaryLink>
        </Actions>
        <Divider />
        <SmallNote>Free delivery on orders over ₹499</SmallNote>
      </Card>
    </Wrapper>
  );
};

export default EmptyCartCard;
