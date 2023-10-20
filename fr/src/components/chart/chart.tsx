import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const Chart = (props:any) => {
	const {
		data,
		colors: {
			backgroundColor = 'white',
			lineColor = '#FFC002',
			textColor = 'black',
			areaTopColor = '#FFC002',
			areaBottomColor = 'rgba(255, 192, 2, 0.28)',
		} = {},
	} = props;

	const chartContainerRef = useRef<any>(null);

	useEffect(
		() => {
			const handleResize = () => {
        if(chartContainerRef.current){
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};