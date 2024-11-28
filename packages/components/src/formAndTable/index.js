import FormAndTable from "./formAndTable.vue";
console.log(FormAndTable.name)

FormAndTable.install = (app) => {
  app.component(FormAndTable.name, FormAndTable);
};
export const AsFormTable = FormAndTable;

export default AsFormTable;