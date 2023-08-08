import { Children } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

Grid.propTypes = {
  cols: PropTypes.object,
  breakpoints: PropTypes.object,
  rowHeight: PropTypes.number,
  children: PropTypes.node,
};

Grid.defaultProps = {
  rowHeight: 95,
  cols: { lg: 3, md: 3, sm: 3, xs: 2, xxs: 2 },
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  gap: 10,
  containerPadding: [0, 0],
};

export default function Grid({ cols, breakpoints, rowHeight, children }) {
  function generateLayouts() {
    const layouts = {};
    Object.keys(breakpoints).forEach((bp) => {
      layouts[bp] = generateLayout(cols[bp]);
    });
    return layouts;
  }

  function generateLayout(cols) {
    const layout = Children.map(children, (child, index) => {
      return {
        x: index % cols,
        y: Math.floor(index / cols),
        w: 1,
        h: 1,
        i: child.key,
      };
    });
    return layout;
  }

  function onLayoutChange(currentLayout, layouts) {
    // setLayouts(layouts);
  }

  return (
    <div className="Grid">
      <ResponsiveReactGridLayout
        className="layout"
        items={children.length}
        rowHeight={rowHeight}
        cols={cols}
        layouts={generateLayouts()}
        onLayoutChange={onLayoutChange}
        isDraggable={false}
        isResizable={false}
        margin={[10, 10]}
      >
        {children}
      </ResponsiveReactGridLayout>
    </div>
  );
}
