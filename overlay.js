function myFunction() {
  document.write(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>กำลังสร้าง PDF...</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Sriracha&family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
            body { font-family: Sriracha; text-align: center; margin-top: 100px; color: red; }
            .spinner {
              margin: 20px auto;
              width: 60px;
              height: 60px;
              border-width: 0.5em;
              border-style: solid;
              border-color: transparent;
              border-top-color: #fff0;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
              background: conic-gradient(red, orange, yellow, green, cyan, blue, violet, red);
              -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 0.3em), black calc(100% - 0.3em));
              mask: radial-gradient(farthest-side, transparent calc(100% - 0.3em), black calc(100% - 0.3em));
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          </style>
        </head>
        <body>
          <div class="spinner"></div>
          <h2>กำลังสร้างเอกสาร HTML...</h2>
          <p style="font-size: 20px;">กรุณารอสักครู่....</p>
          <p style="align-text: center"><a href="https://guruchian.blogspot.com/">Created and developed by GuruChian</a></p>
        </body>
      </html>
  `);
}
      
