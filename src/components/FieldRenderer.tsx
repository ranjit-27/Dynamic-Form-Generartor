const FieldRenderer = ({ field, register, errors }: any) => {
    const { id, type, label, required, placeholder, options, validation } = field;
  
    switch (type) {
      case 'text':
      case 'email':
      case 'textarea':
        return (
          <div className="mb-4">
            <label className="block mb-1">{label}</label>
            <input
              {...register(id, { required, pattern: validation?.pattern && new RegExp(validation.pattern) })}
              placeholder={placeholder}
              className="border rounded w-full p-2 dark:text-black"
            />
            {errors[id] && <span className="text-red-500">{validation?.message || 'Required'}</span>}
          </div>
        );
      case 'select':
        return (
          <div className="mb-4">
            <label className="block mb-1">{label}</label>
            <select
              {...register(id, { required })}
              className="border rounded w-full p-2 dark:text-black"
            >
              {options.map((opt: any) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {errors[id] && <span className="text-red-500">Required</span>}
          </div>
        );
      case 'radio':
        return (
          <div className="mb-4">
            <label className="block mb-1">{label}</label>
            {options.map((opt: any) => (
              <div key={opt.value} className="flex items-center">
                <input
                  {...register(id, { required })}
                  type="radio"
                  value={opt.value}
                  className="mr-2"
                />
                {opt.label}
              </div>
            ))}
            {errors[id] && <span className="text-red-500">Required</span>}
          </div>
        );
      default:
        return null;
    }
  };
  
  export default FieldRenderer;
  