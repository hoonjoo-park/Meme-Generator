import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SINGLE_API_DATA } from 'types';
import { fetcher } from 'utils/fetcher';
import Editor from 'components/editor/Editor';

function Main() {
  const [apiData, setApiData] = useState([]);
  const [currentMeme, setCurrentMeme] = useState<SINGLE_API_DATA | null>(null);
  useEffect(() => {
    (async () => {
      const {
        data: { memes },
      } = await fetcher();
      setApiData(memes);
    })();
  }, []);
  return (
    <MainContainer>
      <Editor
        apiData={apiData}
        currentMeme={currentMeme}
        setCurrentMeme={setCurrentMeme}
      />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
