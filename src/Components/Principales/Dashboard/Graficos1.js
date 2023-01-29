import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'
import {totalCompletadosPorcentaje,totalProgresoPorcentaje,totalSininiciarPorcentaje, totalAbandonadoPorcentaje} from '../../Api/Tableui'



class GraficoPorcentajeCompletado extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [totalCompletadosPorcentaje],
        options: {
            chart: {
                height: 280,
                type: "radialBar",
              },
            
              series: [67],
              colors: ["#20E647"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                  },
                  track: {
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      blur: 4,
                      opacity: 0.15
                    }
                  },
                  dataLabels: {
                    name: {
                      offsetY: -10,
                      color: "#fff",
                      fontSize: "13px"
                    },
                    value: {
                      color: "#fff",
                      fontSize: "30px",
                      show: true
                    }
                  }
                }
              },
              fill: {
                type: "gradient",
                gradient: {
                  shade: "dark",
                  type: "vertical",
                  gradientToColors: ["#87D4F9"],
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: "round"
              },
              labels: ["Aprobado"]
        },
      
      
      };
    }

    render() {
      return (
        
        <div >
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} width={200}/>
        </div>
      );
    }
  }

  class GraficoPorcentajeIniciado extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [totalProgresoPorcentaje],
        options: {
            chart: {
                height: 280,
                width: 200,
                type: "radialBar",
              },
            
              series: [67],
              colors: ["#20E647"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                  },
                  track: {
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      blur: 4,
                      opacity: 0.15
                    }
                  },
                  dataLabels: {
                    name: {
                      offsetY: -10,
                      color: "#fff",
                      fontSize: "13px"
                    },
                    value: {
                      color: "#fff",
                      fontSize: "30px",
                      show: true
                    }
                  }
                }
              },
              fill: {
                type: "gradient",
                gradient: {
                  shade: "dark",
                  type: "vertical",
                  gradientToColors: ["#87D4F9"],
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: "round"
              },
              labels: ["Iniciado"]
        },
      
      
      };
    }

    render() {
      return (
        
        <div >
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} width={200}/>
        </div>
      );
    }
  }

  class GraficoPorcentajeSinIniciar extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
      
        series: [totalSininiciarPorcentaje],
        options: {
            chart: {
                height: 280,
                type: "radialBar",
              },
            
              series: [67],
              colors: ["#20E647"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                  },
                  track: {
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      blur: 4,
                      opacity: 0.15
                    }
                  },
                  dataLabels: {
                    name: {
                      offsetY: -10,
                      color: "#fff",
                      fontSize: "13px"
                    },
                    value: {
                      color: "#fff",
                      fontSize: "30px",
                      show: true
                    }
                  }
                }
              },
              fill: {
                type: "gradient",
                gradient: {
                  shade: "dark",
                  type: "vertical",
                  gradientToColors: ["#87D4F9"],
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: "round"
              },
              labels: ["Sin Iniciar"]
        },
      
      
      };
    }

    render() {
      return (
        
        <div >
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} width={200}/>
        </div>
      );
    }
  }

  class ChartAbandonado extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [totalAbandonadoPorcentaje],
        options: {
            chart: {
                height: 280,
                type: "radialBar",
              },
            
              series: [67],
              colors: ["#20E647"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                  },
                  track: {
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      blur: 4,
                      opacity: 0.15
                    }
                  },
                  dataLabels: {
                    name: {
                      offsetY: -10,
                      color: "#fff",
                      fontSize: "13px"
                    },
                    value: {
                      color: "#fff",
                      fontSize: "30px",
                      show: true
                    }
                  }
                }
              },
              fill: {
                type: "gradient",
                gradient: {
                  shade: "dark",
                  type: "vertical",
                  gradientToColors: ["#87D4F9"],
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: "round"
              },
              labels: ["Abandonado"]
        },
      
      
      };
    }

    render() {
      return (
        
        <div >
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} width={200} />
        </div>
      );
    }
  }

  class ChartAlumnos extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options : {
          chart: {
          type: 'bar',
          height: 350
        },
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
        }
      };
    }
  
    render() {
      return (
        <div >
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
        </div>
      );
    }
  }
  
export {GraficoPorcentajeCompletado,GraficoPorcentajeIniciado,GraficoPorcentajeSinIniciar,ChartAbandonado,ChartAlumnos};