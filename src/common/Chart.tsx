import { BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { ChartData } from 'chart.js/dist/types/index';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BAR_OPTIONS: ChartOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Category',
      font: {
        size: 20,
      },
    },
    legend: {
      display: true,
      position: 'right',
    },
  },
};

export default function Chart({ chartData }: { chartData: ChartData<'bar'> }) {
  return (
    <>
      <Bar className="mb-8 mt-2" data={chartData} options={BAR_OPTIONS} />
    </>
  );
}
