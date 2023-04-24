import { useState } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const arrlayout = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Grid.propTypes = {
  cols: PropTypes.object,
  breakpoints: PropTypes.object,
  rowHeight: PropTypes.number,
};

Grid.defaultProps = {
  rowHeight: 80,
  cols: { lg: 3, md: 3, sm: 3, xs: 2, xxs: 2 },
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  gap: 10,
  containerPadding: [0, 0],
};

export default function Grid({ cols, breakpoints, rowHeight }) {
  const [layouts, setLayouts] = useState(generateLayouts());

  function generateLayouts() {
    const layouts = {};
    Object.keys(breakpoints).forEach((bp) => {
      layouts[bp] = generateLayout(cols[bp]);
    });
    console.log(layouts);
    return layouts;
  }

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
    return layout;
  }

  function generateDOM() {
    return arrlayout.map((i) => {
      return (
        <div
          key={i.toString()}
          style={{ border: '1px solid #C00', backgroundColor: 'white' }}
        >
          {i}
        </div>
      );
    });
  }

  function onLayoutChange(currentLayout, layouts) {
    setLayouts(layouts);
  }

  return (
    <div className="Grid">
      <ResponsiveReactGridLayout
        className="layout"
        items={arrlayout.length}
        rowHeight={rowHeight}
        cols={cols}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        isDraggable={false}
        isResizable={false}
        margin={[10, 10]}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </div>
  );
}
