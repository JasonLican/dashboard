<template>
	<div class="body bg01">
		<div class="header">
			<h1 class="header-title">建筑智慧工地管控</h1>
			<div id="logInfo" style="text-align: left;color: #fff;position: relative;left: 10px;padding-bottom: 10px;">{{ formattedTime }}
			</div>
		</div>
	</div>
	<div class="wrapper">
		<div class="content">
			<div class="col col-l">
				<div class="xpanel-wrapper xpanel-wrapper-55">
					<div class="xpanel xpanel-l-t">
						<div class="title">项目概况</div>
						<div class="bcontent">
							<ul>
								<li class="leftrt">工程名称：</li>
								<li class="rightrt">新建工程</li>
								<li class="leftrt">工程类型：</li>
								<li class="rightrt">水电</li>
								<li class="leftrt">工程状态：</li>
								<li class="rightrt">正在施工</li>
								<li class="leftrt">业主单位：</li>
								<li class="rightrt">项目管理中心</li>
								<li class="leftrt">施工单位：</li>
								<li class="rightrt">输变电分公司</li>
								<li class="leftrt">建管单位：</li>
								<li class="rightrt">建设部</li>
								<li class="leftrt">监理单位：</li>
								<li class="rightrt">**监理有限公司</li>
								<li class="leftrt">计划开始时间：</li>
								<li class="rightrt">2019-10-21</li>
								<li class="leftrt">计划完成时间：</li>
								<li class="rightrt">2019-10-21</li>
								<li class="leftrt">实际开始时间：</li>
								<li class="rightrt">2019-10-21</li>
								<li class="leftrt">实际完成时间：</li>
								<li class="rightrt">2019-10-21</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="xpanel-wrapper xpanel-wrapper-45">
					<div class="xpanel xpanel-l-b">
						<div class="title">项目人员出勤率</div>
						<div id="ryCharts" class="bcontent">

						</div>
					</div>
				</div>
			</div>
			<div class="col col-c">
				<div class="xpanel-wrapper xpanel-wrapper-55">
					<div class="xpanel xpanel-c-b">
						<div class="title title-long" style="padding-left:25px">项目进度甘特图</div>
						<div id="gCharts" class="bcontent" style="height:92%;">

						</div>
					</div>
				</div>
				<div class="xpanel-wrapper xpanel-wrapper-45">
					<div class="xpanel xpanel-c-b">
						<div class="title title-long" style="padding-left:25px">双代号时标网络图</div>
						<div id="container" class="bcontent" style="height:85%;">

						</div>
					</div>

				</div>
			</div>
			<div class="col col-r">
				<div class="xpanel-wrapper xpanel-wrapper-25">
					<div class="xpanel xpanel-r-t">
						<div class="title">机具管控出勤率</div>
						<div id="jqCharts" class="bcontent">

						</div>
					</div>
				</div>
				<div class="xpanel-wrapper xpanel-wrapper-25">
					<div class="xpanel xpanel-r-m">
						<div class="title">违章情况分析率</div>
						<div id="wzCharts" class="bcontent">

						</div>
					</div>
				</div>
				<div class="xpanel-wrapper xpanel-wrapper-45">
					<div class="xpanel xpanel-r-b">
						<div class="title">物料验收</div>
						<div id="wlCharts" class="bcontent">

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';


function getWeekDay(date: any) {
	const weekDaysZh = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	return weekDaysZh[date.getDay()];
}

// 获取当前时间
const formattedTime = ref(formatCurrentTime());
function formatCurrentTime() {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const hours = String(now.getHours()).padStart(2, '0'); // 确保小时数始终为两位
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	const weekDay = getWeekDay(now);

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${weekDay}`;
}

// 在组件挂载后开始定时更新时间
let intervalId = <any>null;
onMounted(() => {
	intervalId = setInterval(() => {
		formattedTime.value = formatCurrentTime();
	}, 1000);
});

// 在组件卸载前清除定时器
onUnmounted(() => {
	if (intervalId) {
		clearInterval(intervalId);
	}
});

</script>
<style lang="less" scoped>
.body {
	width: 100%;
	height: 100%;
	min-height: 700px;
	background-color: #0f1c30;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
	overflow-x: hidden;
	overflow-y: auto;
	margin: 0 auto;
	min-width: 375px;
	max-width: 1920px;
	background: url(../assets/img/bg01.png) center/cover no-repeat;

	.header {
		margin: 0 auto;
		position: relative;
		width: 100%;
		height: 65px;
		max-width: 1920px;
		background: url("../assets/img/header.png") center no-repeat;
		box-sizing: border-box;
	}

	.header-title {
		margin: 0;
		padding: 0;
		line-height: 50px;
		text-align: center;
		font-size: 22px;
		color: #5dc2fe;
	}
}

.wrapper {
	position: absolute;
	top: 68px;
	bottom: 0;
	left: 0;
	right: 0;
	min-height: 555px;

	.content {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		height: 100%;
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
	}

	.col {
		margin: 0px 5px 0px;
		;
		height: 100%;
		min-width: 320px;
	}

	.col-l {
		-webkit-flex: 1.5;
		-ms-flex: 1.5;
		flex: 1.5;
	}

	.col-c {
		-webkit-flex: 4;
		-ms-flex: 4;
		flex: 4;
	}

	.col-r {
		-webkit-flex: 1.5;
		-ms-flex: 1.5;
		flex: 1.5;
	}

	.xpanel-wrapper {
		padding-bottom: 5px;
		box-sizing: border-box;
	}

	.xpanel-wrapper {
		height: 100%;
		width: 100%
	}

	.xpanel-wrapper-25 {
		height: 27.5%;
	}

	.xpanel-wrapper-30 {
		height: 30%;
	}

	.xpanel-wrapper-40 {
		height: 40%;
	}

	.xpanel-wrapper-45 {
		height: 45%;
	}

	.xpanel-wrapper-60 {
		height: 60%;
	}

	.xpanel-wrapper-75 {
		height: 60%;
	}

	.xpanel-wrapper-55 {
		height: 55%;
	}

	.xpanel {
		height: 100%;
		min-height: 100px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		box-sizing: border-box;
	}

	.xpanel-m-c {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel-l-t {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel-l-b {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel-c-b {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel-r-t {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel-r-m {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel-r-b {
		background-image: url("../assets/img/panel.png");
	}

	.xpanel .title {
		font-weight: normal;
		color: #fff;
		background-image: url("../assets/img/title-bg.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.xpanel .bcontent {
		line-height: 1;
		font-size: 15px;
		text-align: left;
		height: 95%;
		width: 98%;
		color: #5dc2fe;
	}

	.xpanel .tcontent {
		line-height: 1;
		font-size: 15px;
		text-align: left;
		height: 90%;
		width: 98%;
		color: #5dc2fe;
	}

	.xpanel .no-bg {
		margin: 15px;
	}

	.xpanel .bcontent ul,
	li {
		list-style: none;
		padding: 0;
		margin: 1px;
	}

	.xpanel .bcontent ul {
		margin-top: 10px;
		clear: both;
		overflow: hidden;
		height: 98%;
	}

	.xpanel .bcontent ul li {
		height: 20px;
		margin-bottom: 5px;
		float: left;
		font-size: 12px;
	}

	.xpanel .bcontent ul li:nth-child(even) {
		margin-left: 4%;
	}

	.leftrt {
		width: 32%;
		text-align: right;
		color: #f1ebe5;
		font-weight: bold;

	}

	.rightrt {
		width: 63%;
		font-weight: bold;
		color: #f1ebe5;

	}

	.xpanel .title-long {
		padding-left: 24px;
		background-image: url("../assets/img/title-bg-long.png");
	}
}
</style>