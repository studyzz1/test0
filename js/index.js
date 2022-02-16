// 柱状图
(function(){
    // 1实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2制定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // 修改图表大小
        grid: {
          left: '0%',
          top:"10px",
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['泵1主压力', '泵2主压力', '泵1二次压力', '泵2二次压力', '先导压力'],
            axisTick: {
              alignWithLabel: true
            },
            //修改刻度标签 相关样式
            axisLabel:{
                color:"rgba(255,255,255,0.6)",
                fontSize: 9,
                fontWeight: "bolder"
            },
            //不显示x坐标轴样式
            axisLine:{
                show:false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            //修改刻度标签 相关样式
            axisLabel:{
                color:"rgba(255,255,255,0.6)",
                fontSize:12
            },
            //y坐标轴样式修改
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.1)"
                }
            },
            //y轴分割线
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.1)"
                }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 334, 390, 250, 330],
            // 修改柱子圆角
            itemStyle:{
                barBorderRadius:5
            }
          }
        ]
      };
      // 3把配置项给实例对象
      myChart.setOption(option);
      //4.让图表与屏幕自适应
      window.addEventListener("resize",function(){myChart.resize()});
})();

// 柱状图2---挖掘机泵流量状态
(function(){
    //1实例化对象
    var myColor = ["orange","#F57474","#56D0E3","rgba(155,255,0,1)"];
    var myChart = echarts.init(document.querySelector(".line .chart"));
    //2指定配置和数据
    var option = {
        grid: {
          top: '10%',
          left: '22%',
          bottom: '10%',
          /* containLabel: true */
        },
        xAxis: {
          show:false
        },
        yAxis: [
            {
                type: 'category',
                data: ['泵1温度', '泵2温度', '液压油温度', '水温'],
                inverse: true,
                axisLine:{
                  show:false
                },
                axisTick:{
                    show:false
                },
                //刻度标签修改为白色
                axisLabel:{
                    color:"#fff"
                }
              },
            {
                data:[100,100,100,100],
                inverse: true,
                axisLine:{
                    show:false
                  },
                  axisTick:{
                      show:false
                  },
                  //刻度标签修改为白色
                  axisLabel:{
                      color:"#fff"
                  }
            }
        ],
        series: [
          {
              name: '框',
              type: 'bar',
              animation: true,
              yAxisIndex:1,
              barCategoryGap:50,
              barWidth:20,
              itemStyle:{
                  color: "none",
                  borderColor:"#00c1de",
                  borderWidth: 3,
                  barBorderRadius: 15,
              },

              data: [
                {value:100},
                {value:100},
                {value:100},
                {value:100}
              ]

            },
          {
            name: '条',
            type: 'bar',
            animation: true,

            data: [
              {value:58},
              {value:61},
              {value:75},
              {value:55}
            ],
      
            yAxisIndex:0,
            //柱子圆角
            itemStyle:{
                barBorderRadius:20,
                color:function(params){
                    //params 传进来的是柱子的对象
                    //dataIndex是当前柱子的索引号
                    return myColor[params.dataIndex];
                }
            },
            //柱子间距
            barCategoryGap:50,
            //柱子宽度
            barWidth:20,
            label:{
                show:true,
                position:"inside",
                formatter:"{c}°c"
            }
          }
        ]
      };
setInterval(function () {
        const random1 = +(Math.random() * 10 + 50).toFixed(2);
        const random2 = +(Math.random() * 10 + 60).toFixed(2);
        const random3 = +(Math.random() * 10 + 70).toFixed(2);
        const random4 = +(Math.random() * 10 + 50).toFixed(2);
        myChart.setOption({
          series: [
            {
              data: [
                {value:100},
                {value:100},
                {value:100},
                {value:100}
              ]
            },
            {
              data: [
                {value:random1},
                {value:random2},
                {value:random3},
                {value:random4}
              ]
            }
          ]
        });
      }, 2000); 
    //3把配置给实例对象
    myChart.setOption(option);
      //4.让图表与屏幕自适应
      window.addEventListener("resize",function(){myChart.resize()});
})();

//折线图1--发动机温度
(function(){
    //1实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    //2指定配置
    var option = {
        //通过color数组修改两条线的颜色
        color:["#00f2f1","#ed3f35"],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          //修改图例组件颜色
          textStyle:{
              color:"#4c9bfd"
          },
          right:"10%"
        },
        grid: {
          top:"20%" ,
          left: '3%',
          right: '4%',
          bottom: '3%',
          show: true,
          borderColor:"#012f4a",
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
          axisTick:{
              show: false
          },
          axisLabel:{
              /* color:"#4c9bfd" */
              show: false
          },
          axisLine:{
              show: false
          }
        },
        yAxis: {
          type: 'value',
          axisTick:{
            show: false
        },
        axisLabel:{
            color:"#4c9bfd"
        },
        axisLine:{
            show: false
        },
        splitLine:{
            lineStyle:{
                color:"#012f4a"
            }
        }
        },
        series: [
          {
            name: '泵1流量',
            type: 'line',
            data: [124, 140, 101, 134, 90, 130, 110, 130, 120, 130, 110, 120],
            //让折线平滑
            smooth: true
          },
          {
            name: '泵2流量',
            type: 'line',
            data: [240, 264, 291, 224, 290, 230, 210, 213, 280, 200, 280,279],
            //让折线平滑
            smooth: true
          }
        ]
      };
    //3把配置给实例对象
    myChart.setOption(option);
    //4.让图表与屏幕自适应
    window.addEventListener("resize",function(){myChart.resize()});
})();

// 饼图1配置--挖掘机油耗
(function(){
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2指定配置
  var option = {
    series: [
      {
        type: 'gauge',
        //中心位置
        center: ['50%', '73%'],
        // 仪表盘直径
        radius: "90%",
        //开始角度
        startAngle: 200,
        //结束角度
        endAngle: -20,
        //最小值
        min: 0,
        //最大值
        max: 60,
        //仪表盘刻度的分割段数
        splitNumber: 12,
        //仪表盘指针样式
        itemStyle: {
          color: 'rgba(255, 0, 0, 1)'
        },
        //展示当前进度
        progress: {
          show: true,
          //进度条宽度
          width: 30
        },
        //仪表盘指针
        pointer: {
          show: false
        },
        //坐标轴样式
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        //刻度样式
        axisTick: {
          //刻度线与轴线的距离
          distance: -45,
          //分隔线之间分割的刻度数
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#fff'
          }
        },
        //轴分割线
        splitLine: {
          //分隔线与轴线的距离
          distance: -52,
          //分割线线长
          length: 14,
          lineStyle: {
            //线宽
            width: 3,
            //线的颜色
            color: '#fff'
          }
        },
        //刻度标签
        axisLabel: {
          distance: -10,
          color: '#fff',
          fontSize: 15
        },
        //表盘中指针的固定点
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        //显示的数据的设置
        detail: {
          //是否开启标签的数字动画
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          //文字块的圆角
          borderRadius: 8,
          //相对于仪表盘中心的偏移位置
          offsetCenter: [0, '20%'],
          fontSize: 30,
          fontWeight: 'bolder',
          //格式化函数或者字符串
          formatter: '{value}',
          //颜色
          color: '#fff'
        },
        data: [
          {
            value: 31.55
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '73%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 31.55
          }
        ]
      }
    ]
  };
  setInterval(function () {
    const random = +(Math.random() * 10 + 30).toFixed(2);
    myChart.setOption({
      series: [
        {
          data: [
            {
              value: random
            }
          ]
        },
        {
          data: [
            {
              value: random
            }
          ]
        }
      ]
    });
  }, 2000);
  // 3将配置项给实例对象
  myChart.setOption(option);
  // 4让图表与屏幕实现自适应
  window.addEventListener("resize",function(){myChart.resize()});
})();


//折线图2的设置
(function(){
  //1初始化实例对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  //2配置项
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top:"0%",
      textStyle:{
        color:"rgba(255,255,255,0.5)",
        fontSize: 12
      }
    },
    grid: {
      left: '10%',
      top: "30%",
      right: '10%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "Pitch向角度",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: "Roll向角度",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          50,
          10,
          20,
          40,
          30,
          40,
          10,
          60,
          20,
          40,
          60,
          40,
          20,
          40,
          30,
          40,
          50,
          20,
          50,
          40,
          60,
          70,
          30,
          40,
          30,
          40,
          20,
          59,
          50,
          20
        ]
      }
    ]
  };
  // 3将配置项给实例对象
  myChart.setOption(option);
  // 4让图表与屏幕实现自适应
  window.addEventListener("resize",function(){myChart.resize()});
})();

//饼图2
(function(){
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle:{
        color:"rgba(255,255,255,0.5)",
        fontSize: 12
      }
    },
    grid: {
      top: "15%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
      type: 'category',
      boundaryGap: false,
      data: ['01', '03', '05', '07', '09', '11', '13'],
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [

      {
        name: '斗杆位移',
        type: 'line',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '铲斗位移',
        type: 'line',
        smooth: true,
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '动臂位移',
        type: 'line',
        smooth: true,
        data: [320, 332, 301, 334, 390, 330, 320]
      }
    ]
  };
  // 3将配置项给实例对象
  myChart.setOption(option);
  // 4让图表与屏幕实现自适应
  window.addEventListener("resize",function(){myChart.resize()});
})();