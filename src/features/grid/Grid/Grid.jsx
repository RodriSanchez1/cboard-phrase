import { useState } from 'react';
import './Grid.css';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

//const ReactGridLayout = WidthProvider(RGL);

const arrlayout = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Grid() {
  const [layout, setLayout] = useState(generateLayout(6));

  function generateLayout(cols) {
    //const layout = React.Children.map(this.props.children, (child, index) => {
    const layout = arrlayout.map((child, index) => {
      return {
        x: index % cols,
        y: Math.floor(index / cols),
        w: 1,
        h: 1,
        i: child.toString(),
      };
    });
    console.log(layout);
    return layout;
  }

  function generateDOM() {
    return arrlayout.map((i) => {
      return (
        <div key={i.toString()} style={{ border: '1px solid #C00' }}>
          {i}
        </div>
      );
    });
  }

  function onLayoutChange(layout) {
    setLayout(layout);
    console.log(layout);
  }

  return (
    <div className="Grid">
      <GridLayout
        className="layout"
        items={12}
        rowHeight={80}
        cols={6}
        layout={layout}
        width={1000}
        onLayoutChange={onLayoutChange}
        isDraggable={false}
        isResizable={false}
        margin={[10, 10]}
      >
        {generateDOM()}
      </GridLayout>
    </div>
  );
}
