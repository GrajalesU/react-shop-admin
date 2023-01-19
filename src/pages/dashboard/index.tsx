import Chart from '@/common/Chart';
import useFetch from '@/hooks/useFetch';
import endPoints from '@/services/api';
import { Product } from '@/types/product';
import { ChartData } from 'chart.js';

export default function Dashboard() {
  const { data: totalProducts } = useFetch(endPoints.products.list(0, 0));

  const categories = totalProducts?.map((product: Product) => product.category);

  const categoriesName = categories?.map((category) => category.name);

  const countOccurrences = (arr: string[]) => arr.reduce((prev: { [key: string]: number }, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data: ChartData<'bar'> = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoriesName),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart chartData={data} />
    </>
  );
}
