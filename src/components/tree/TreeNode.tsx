import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";

type TreeNodeProps = {
  node: TreeNodeType;
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  return (
    <li>
      <span className={clsx(node.active && styles.active)}>{node.title}</span>
      {node.branch && (
        <ul>
          {Array.isArray(node.branch) ? (
            node.branch.map((branch, index) => (
              <TreeNode key={index} node={branch} />
            ))
          ) : (
            <TreeNode node={node.branch} />
          )}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
