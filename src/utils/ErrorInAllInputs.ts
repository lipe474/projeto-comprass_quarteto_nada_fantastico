export function SetErrorInputs(
  type: string,
  message: string,
  setError: any,
  fields: string[]
) {
  const errorMessages: Record<string, { type: string; message: string }> = {};

  fields.forEach((fieldName) => {
    errorMessages[fieldName] = { type, message };
  });

  for (const fieldName in errorMessages) {
    setError(
      fieldName as keyof typeof errorMessages,
      errorMessages[fieldName as keyof typeof errorMessages]
    );
  }
}
