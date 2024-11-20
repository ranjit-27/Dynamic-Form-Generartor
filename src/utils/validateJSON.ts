
const validateJSON = (json: any) => {
    if (!json.formTitle || !json.fields) {
      throw new Error('Invalid schema: Missing required fields.');
    }
    json.fields.forEach((field: any) => {
      if (!field.id || !field.type || !field.label) {
        throw new Error('Invalid field: Missing required properties.');
      }
    });
  };
  export default validateJSON;
  