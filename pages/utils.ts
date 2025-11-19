type StiReportType = any;

export const setReportVariables = (
  report: StiReportType,
  variables: Record<string, string | number | Date | undefined>
): void => {
  if (!report?.dictionary?.variables) return;

  Object.entries(variables).forEach(([variableKey, variableValue]) => {
    const reportVariable = report.dictionary.variables.getByName(variableKey);
    if (reportVariable) {
      reportVariable.valueObject = variableValue ?? '';
    }
  });
};

export const reportNamePath = (name: string) => {
  if (process.env.NEXT_PUBLIC_ENV === 'production') return `prod/${name}.mrt`;
  return `staging/${name}.mrt`;
};
