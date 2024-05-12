import React from "react";
import styles from "./style.module.css";
import TreeNode from "./TreeNode";

type TreeProps = {
  treeData: TreeNodeType[];
};

const Tree: React.FC<TreeProps> = ({ treeData }) => {
  return (
    <ul className={styles.tree}>
      {treeData.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </ul>
  );
};

export default Tree;
