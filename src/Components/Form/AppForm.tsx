import { Formik, FormikConfig, FormikValues } from "formik";

interface AppFormProps extends FormikConfig<FormikValues> {}

const AppForm = (props: AppFormProps) => {
  const { initialValues, validationSchema, onSubmit, children } = props;
  return (
    <Formik
      initialValues={initialValues}
      validateSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
};

export default AppForm;
