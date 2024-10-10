import { omit } from "lodash-es";
import { defineComponent } from 'vue'

export default defineComponent({
  name: "BaseTableColumn",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const getColAttrs = (col) => {
      return omit(col, ["slots", "uid"]);
    };

    const renderCols = () => {
      const { columns } = props;
      return renderChildren(columns);
    };
    const renderChildren = (nodes) => {
      return nodes.map((col) => {
        return (
          <el-table-column
            show-overflow-tooltip={true}
            key={col.uid || col.prop}

            {...getColAttrs(col)}
            v-slots={col.slots}
          >
            {col.children && renderChildren(col.children)}
          </el-table-column>
        );
      });
    };

    return () => <> {renderCols()}</>;
  },
});
