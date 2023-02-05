import React, {useState, useContext} from 'react';
import ReactApexChart from 'react-apexcharts'
import { DataContext } from '../../../Context/DataContext';

  function GraficoPorcentajeSinIniciar() {
    const {PorcentajeSinIniciar} = useContext(DataContext)  
    const [options, setOptions] = useState({
      chart: {
        height: 280,
        width: 200,
        type: "radialBar"
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
    });
  
    return (
      <div>
        <ReactApexChart options={options} series={[PorcentajeSinIniciar]} type="radialBar" height={200} width={200} />
      </div>
    );
  }
  
  
  function GraficoPorcentajeCompletado() {
    const {PorcentajeAprobados} = useContext(DataContext)  
    const [options, setOptions] = useState({
      chart: {
        height: 280,
        width: 200,
        type: "radialBar"
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
    });
  
    return (
      <div>
        <ReactApexChart options={options} series={[PorcentajeAprobados]} type="radialBar" height={200} width={200} />
      </div>
    );
  }

  
  function GraficoPorcentajeIniciado() {
    const {PorcentajeIniciados} = useContext(DataContext)  
    const [options, setOptions] = useState({
      chart: {
        height: 280,
        width: 200,
        type: "radialBar"
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
    });
  
    return (
      <div>
        <ReactApexChart options={options} series={[PorcentajeIniciados]} type="radialBar" height={200} width={200} />
      </div>
    );
  }

  
export {GraficoPorcentajeCompletado,GraficoPorcentajeIniciado,GraficoPorcentajeSinIniciar};