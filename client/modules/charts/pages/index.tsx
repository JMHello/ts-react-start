import React, { Fragment, useRef, useEffect } from 'react';
import Echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';

import { getBarOptions, getPieOptions, getLineOptions } from '@modules/charts/utils';
import { barData, pieData, lineData } from '@modules/charts/data';

import './index.less';


export default function() {
  const bar = useRef(null);
  const pie = useRef(null);
  const line = useRef(null);

	useEffect(() => {
		const myCharts = Echarts.init(bar.current);
		console.error(myCharts);


		myCharts.setOption(
			getBarOptions(barData)
		);
  });
  
  useEffect(() => {
		const myCharts = Echarts.init(pie.current);
		console.error(myCharts);

		myCharts.setOption(
			getPieOptions(pieData)
		);
  });
  
  useEffect(() => {
		const myCharts = Echarts.init(line.current);
		console.error(myCharts);

		myCharts.setOption(
			getLineOptions(lineData)
		);
	});

	return (
		<Fragment>
      <div className="echarts-container" ref={bar}/>
      <div className="echarts-container" ref={pie}/>
      <div className="echarts-container" ref={line}/>
    </Fragment>
	);
}