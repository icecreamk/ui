import Table from "./src/table.vue";

Table.install = (app) => {
  app.component(Table.name, Table);
};
export const AsTable = Table;

export default AsTable;