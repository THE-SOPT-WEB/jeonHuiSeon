// import useGeo from 'hooks/useGeo';
import Card from 'components/Card';
import Result from 'components/Result';
import useGeo from 'hooks/useGeo';
import { client } from 'lib/api';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Main() {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState({ resultList: [], state: 'idle' });
  const toggle = () => setIsChecked(!isChecked);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult({ ...result, state: 'pending' });
    if (isChecked) {
      const { x, y } = await useGeo();
      const { data } = await client.get('/search/keyword', {
        params: {
          x,
          y,
          radius: 1000,
          query: '마라탕',
        },
      });
      setResult({ resultList: [...data.documents], state: 'resolved' });
    } else {
      const { data } = await client.get('/search/keyword', {
        params: {
          query: inputValue + ' 마라탕',
        },
      });
      setResult({ resultList: [...data.documents], state: 'resolved' });
    }
  };

  return (
    <StyledRoot>
      <h1>🍜 우리동네 마라탕 🍜</h1>
      <StyledSearchWrapper>
        <StyledCheckWrapper>
          <label>지역기반으로 검색</label>
          <input type="checkbox" onChange={toggle} />
        </StyledCheckWrapper>
        <StyledInputWrapper onSubmit={handleSubmit}>
          <label>우리동네는 바로여기</label>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="동네를 입력해 주세요"
            disabled={isChecked}
          />
        </StyledInputWrapper>
        <button onClick={handleSubmit}>검색</button>
      </StyledSearchWrapper>
      <Result result={result} />
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45rem;
  min-height: calc(100vh - 4rem);
  margin: 2rem auto;
  border: 5px solid white;
  border-radius: 20px;

  & > h1 {
    width: 100%;
    font-size: 4rem;
    color: ${theme.colors.point};
    padding: 3rem 0;
    border-bottom: 5px solid white;
    text-align: center;
  }
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  gap: 2rem;
  border-bottom: 5px solid white;

  & > button {
    width: 7rem;
    height: 4rem;
    border: 0;
    background-color: white;
    border-radius: 50px;
    font-size: 2rem;
    font-family: 'establishRetrosansOTF';
  }
`;

const StyledCheckWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > label {
    font-size: 3rem;
    color: white;
  }
  & > input {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StyledInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > label {
    text-align: center;
    font-size: 3rem;
    color: white;
  }

  & > input {
    height: 3rem;
    outline: 0;
    border: 0;
  }
`;
