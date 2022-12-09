import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoxContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 200px;
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(121, 12, 9);
  background: linear-gradient(
    58deg,
    rgba(121, 12, 9, 1) 0%,
    rgba(255, 34, 0, 1) 60%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  transition: all 200ms ease-in-out;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(160, 160, 160, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(255, 68, 0);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  text-align: left;
  height: 42px;
  outline: none;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  border-left: 1.5px solid rgba(160, 160, 160, 0.4);
  border-right: 1.5px solid rgba(160, 160, 160, 0.4);
  border-bottom: 1.5px solid rgba(160, 160, 160, 0.4);

  &::placeholder {
    color: rgba(160, 160, 160, 1);
  }

  &:first-of-type {
    border-radius: 4px 4px 0 0;
    border-top: 1.5px solid rgba(160, 160, 160, 0.4);
  }

  &:not(:first-of-type) {
    border-top: none;
  }

  &:last-of-type {
    border-radius: 0 0 4px 4px;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(0, 179, 255);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(121, 12, 9);
  background: linear-gradient(130deg, #c11610 0%, rgba(255, 34, 0, 1) 30%);

  &:hover {
    filter: brightness(1.03);
  }
`;
