import { useEffect, useState } from 'react';

type Props = {
  content: any;
};

const Markdown = ({ content = '빈 글' }: Props) => {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    const markdown = document.getElementById('markdown');
    markdown!.innerHTML = content;
    setfirst(true);
  }, [first]);

  return <div id="markdown">Markdown</div>;
};

export default Markdown;
