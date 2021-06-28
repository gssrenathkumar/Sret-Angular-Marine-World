# Sret-Angular-Marine-World
Created an responsive Angular Web Page with two way bindings, Routing etc.

<svg
        width="495"
        height="150"
        viewBox="0 0 495 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #fe428e;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
          }
          
    
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #a9fef7;
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .rank-text {
      font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #a9fef7; 
      animation: scaleInAnimation 0.3s ease-in-out forwards;
    }
    
    .bold { font-weight: 700 }
    .icon {
      fill: #f8d847;
      display: none;
    }
    
    .rank-circle-rim {
      stroke: #fe428e;
      fill: none;
      stroke-width: 6;
      opacity: 0.2;
    }
    .rank-circle {
      stroke: #fe428e;
      stroke-dasharray: 250;
      fill: none;
      stroke-width: 6;
      stroke-linecap: round;
      opacity: 0.8;
      transform-origin: -10px 8px;
      transform: rotate(-90deg);
      animation: rankAnimation 1s forwards ease-in-out;
    }
    
    @keyframes rankAnimation {
      from {
        stroke-dashoffset: 251.32741228718345;
      }
      to {
        stroke-dashoffset: NaN;
      }
    }
  
  
    .lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #a9fef7 }
    

          
    /* Animations */
    @keyframes scaleInAnimation {
      from {
        transform: translate(-5px, 5px) scale(0);
      }
      to {
        transform: translate(-5px, 5px) scale(1);
      }
    }
    @keyframes fadeInAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
          
        </style>

        

        <rect
          data-testid="card-bg"
          x="0.5"
          y="0.5"
          rx="4.5"
          height="99%"
          stroke="#e4e2e2"
          width="494"
          fill="#141321"
          stroke-opacity="1"
        />

        
      <g
        data-testid="card-title"
        transform="translate(25, 35)"
      >
        <g transform="translate(0, 0)">
      <text
        x="0"
        y="0"
        class="header"
        data-testid="header"
      >Wakatime Stats</text>
    </g>
      </g>
    

        <g
          data-testid="main-card-body"
          transform="translate(0, 55)"
        >
          
    <svg x="0" y="0" width="100%">
      <g transform="translate(0, 0)">
    <g class="stagger" style="animation-delay: NaNms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5">Python:</text>
      <text
        class="stat"
        x="350"
        y="12.5"
        data-testid="Python"
      >14 mins</text>
      
    <svg width="220" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="220" height="8" fill="#a9fef7"></rect>
      <rect
          height="8"
          fill="#fe428e"
          rx="5" ry="5" x="0" y="0" 
          data-testid="lang-progress"
          width="79.54%"
      >
      </rect>
    </svg>
  
    </g>
  </g><g transform="translate(0, 25)">
    <g class="stagger" style="animation-delay: NaNms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5">HTML:</text>
      <text
        class="stat"
        x="350"
        y="12.5"
        data-testid="HTML"
      >3 mins</text>
      
    <svg width="220" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="220" height="8" fill="#a9fef7"></rect>
      <rect
          height="8"
          fill="#fe428e"
          rx="5" ry="5" x="0" y="0" 
          data-testid="lang-progress"
          width="18.1%"
      >
      </rect>
    </svg>
  
    </g>
  </g>
    </svg>
  
        </g>
      </svg>
