import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FieldRenderer from './FieldRenderer';

const FormPreview = ({ schema }: { schema: any }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit: SubmitHandler<any> = data => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
    setShowPopup(true);
    reset();
  };

  const downloadJSON = () => {
    if (submittedData) {
      const blob = new Blob([JSON.stringify(submittedData, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'form_submission.json';
      link.click();
      URL.revokeObjectURL(url);
      setShowPopup(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <h2 className="text-xl font-bold mb-2">{schema.formTitle}</h2>
        <p className="text-sm text-gray-600 mb-4">{schema.formDescription}</p>
        {schema.fields.map((field: any) => (
          <FieldRenderer key={field.id} field={field} register={register} errors={errors} />
        ))}
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>

     
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white  p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <h3 className="text-lg font-bold mb-4 dark:text-black">Submitted Data</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 dark:text-white p-4 rounded overflow-auto text-sm max-h-64">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
            <div className="flex justify-end mt-4">
              <button
                onClick={downloadJSON}
                className="bg-green-500 text-white py-2 px-4 rounded mr-2"
              >
                Download JSON
              </button>
              <button
                onClick={closePopup}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPreview;
