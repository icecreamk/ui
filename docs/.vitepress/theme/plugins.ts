// import mdContainer from 'markdown-it-container'
// import externalLinkIcon from '../plugins/external-link-icon'
// import tableWrapper from '../plugins/table-wrapper'
// import tooltip from '../plugins/tooltip'
// import tag from '../plugins/tag'
// import headers from '../plugins/headers'
// import createDemoContainer from '../plugins/demo'
// import { ApiTableContainer } from '../plugins/api-table'
import type { MarkdownRenderer } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

export const mdPlugin = (md: MarkdownRenderer) => {
  // 支持区块内的方式展示 demo 和示例代码
  md.use(containerPreview);
  md.use(componentPreview);
  
  // md.use(headers)
  // md.use(externalLinkIcon)
  // md.use(tableWrapper)
  // md.use(tooltip)
  // md.use(tag)
  // md.use(mdContainer, 'demo', createDemoContainer(md))
  // md.use(ApiTableContainer)
  
}
