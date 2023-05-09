import React, { useState, type ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface LanguageOption {
  lang: string;
  algo: string;
}

interface LanguageSelectProps {
  options: LanguageOption[];
}

const LanguageSelect = ({ options }: LanguageSelectProps): ReactElement => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const lang = event.target.value;
    const selected = options.find((option) => option.lang === lang);
    if (selected !== undefined) setSelectedOption(selected);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="language-select" className="mr-2">
        Select language:
      </label>
      <select
        id="language-select"
        value={selectedOption.lang}
        onChange={handleChange}
        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2 pr-8 py-1 text-base"
      >
        {options.map((option) => (
          <option key={option.lang} value={option.lang}>
            {option.lang}
          </option>
        ))}
      </select>
      <SyntaxHighlighter language={selectedOption.lang} style={docco}>
        {selectedOption.algo}
      </SyntaxHighlighter>
    </div>
  );
};

export default LanguageSelect