<template>
  <div>
		<no-ssr>
			<!-- this component will only be rendered on client-side -->
			<echart :options="polar" :auto-resize="true"></echart>
			<div slot="placeholder" class="echart_loader">
				<span>图表加载中</span>
			</div>
		</no-ssr>
	</div>
  <!-- <no-ssr placeholder="Loading...">
    <echart :options="polar"></echart>
  </no-ssr> -->
</template>

<style lang="scss" scoped>
  .echarts {
    height: 100%;
    width: 100%;
  }
	.no-ssr-placeholder{
		height: 100%;
	}
  .echart_loader{
		height: 100%;
    width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<script>
  export default {
    data: function () {
      return {
				num: 10,
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: []
          }],
          animationDuration: 2000
        }
      }
    },
		methods: {
			getData(){
				let data = [];
				for (let i = 0; i <= this.num*2; i++) {
					let t = i / this.num * Math.PI
					let r = Math.sin(2 * t) * Math.cos(2 * t)
					data.push([r, i])
				}
				this.num += 10;
				return data;
			}
		},
		mounted(){
			console.log(this.polar.series[0].data)
			setInterval(() =>{
				this.polar.title.text = `极坐标双数值轴${this.num}`;
				this.polar.series[0].data = this.getData();
			}, 1000);
		}
  }

</script>
