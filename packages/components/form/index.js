import Form from "./src/form.vue";

Form.install = (app) => {
  app.component(Form.name, Form);
};
export const AsForm = Form;

export default AsForm;