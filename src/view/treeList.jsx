import React, { useState } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                id: '0-0-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf0-0',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'leaf0-1',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
            },
        ],
    },
];

export function TreeListDemo() {

    return (
        <Tree>
            <TreeNode></TreeNode>
            {/* {treeData} */}
        </Tree>
    )
}