import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import './index.css';

const App: React.FC = () => {
  const [form, setForm] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleUpdate = (updatedSchema: any) => {
    setForm(updatedSchema);
  };

  const copyFormJSON = () => {
    if (form) {
      navigator.clipboard.writeText(JSON.stringify(form, null, 2));
      alert('Form JSON copied to clipboard!');
    } else {
      alert('No JSON schema to copy.');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <div className=" h-5/6 flex flex-col md:flex-row bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className=" w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 dark:bg-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mb-4">JSON Schema Editor</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500"
            >
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          <div className="flex">
            <button
              onClick={copyFormJSON}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-900"
            >
              Copy Form JSON
            </button>
          </div>
          <JSONEditor onUpdate={handleUpdate} />
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white dark:bg-gray-900 p-4 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Form Preview</h1>
          {form ? (
            <FormPreview schema={form} />
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Edit the JSON schema to preview the form.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
