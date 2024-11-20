import React, { useState } from 'react';
import validateJSON from '../utils/validateJSON';

const JSONEditor = ({ onUpdate }: { onUpdate: (json: any) => void }) => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      validateJSON(parsed); 
      setError(null);
      onUpdate(parsed);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="flex flex-col h-screen">
        {error && <span className="text-red-500 dark:text-red-400">{error}</span>}
        <textarea
            className="w-full h-4/6 p-4 border rounded resize-none 
                    bg-white-100 dark:bg-white-800 
                    text-black dark:text-black 
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={jsonInput}
            onChange={handleChange}
            placeholder="Enter JSON schema here..."
        />
      
    </div>
  );
};

export default JSONEditor;
