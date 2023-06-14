import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import porpTypes from 'prop-types';

CustomLineChart.propTypes = {
  data: porpTypes.array.isRequired,
};

export default function CustomLineChart({ data }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#fff" padding={{ bottom: 20 }} />
          <YAxis stroke="#fff" padding={{ top: 20, bottom: 20 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Times speaked"
            stroke="#ff9800"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
