import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
import type { Props } from '@theme/DocSidebarItems';
import React, { memo } from 'react';

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }: Props): React.Element {
  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
