import { Component, OnInit } from '@angular/core';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};


@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {

  nodes: any[];

  currentNode: any = {
    name: '',
    subTitle: ''
  }

  hiddenNode: any;

  asyncChildren = [
    {
      name: 'child2.1',
      subTitle: 'new and improved'
    }, {
      name: 'child2.2',
      subTitle: 'new and improved2'
    }
  ];

  customTemplateStringOptions = {
    // displayField: 'subTitle',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    actionMapping,
    nodeHeight: 23,
    allowDrag: true,
    useVirtualScroll: true
  };


  dogs: Object[] = [
    {
      name: 'Porter',
      human: 'Kara'
    }, {
      name: 'Mal',
      human: 'Jeremy'
    }, {
      name: 'Koby',
      human: 'Igor'
    }, {
      name: 'Razzle',
      human: 'Ward'
    }, {
      name: 'Molly',
      human: 'Rob'
    }, {
      name: 'Husi',
      human: 'Matias'
    }];

  ngOnInit() {
    setTimeout(() => {
      this.nodes = [
        {
          name: 'Root node',
          hasChildren: true,
          subTitle: 'new and improved2'
        }
      ];

    }, 1);
  }

  getChildren(node: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.asyncChildren.map((c) => {
        return Object.assign({}, c, {
          hasChildren: node.level < 5
        });
      })), 1000);
    });
  };

  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
  }

  onEvent(event) {
    console.log(event.node.data);
    this.hiddenNode = Object.assign({}, event.node.data);
    this.currentNode = event.node.data;
  }

  // saveNode(): void {
  //   console.log(this.currentNode);
  // }
  //
  // cancel(): void {
  //   this.currentNode = this.hiddenNode;
  //   console.log('roll back');
  // }

  remove(i: any): void {
    this.dogs.splice(i, 1);
  }

  constructor() { }
}
