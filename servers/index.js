const express = require('express');
const app = express();
const port = 40000; // 你想监听的端口

const hugedata = `\`At Auto Shanghai 2025, running from April 23 to May 2, nearly 1,000 companies from 26 countries showcase their innovations.

A major highlight of the event has been the introduction of AI humanoid robots.

Among the most talked-about innovations is Mornine Gen-1, an AI humanoid robot developed by Chinese automaker Chery.

Designed to resemble a young woman, Mornine is set for various roles, from auto sales consultation to retail guidance and entertainment performances.

Also drawing attention is AgiBot’s A2 interactive service robot. Serving as a ‘sales consultant,’ the A2’s smart, interactive features have made it a standout at the event.

Would you like to learn more about AI, tech and digital diplomacy? If so, ask our Diplo chatbot!\``


// 定义一个最简单的路由
app.get('/jsonp-data', (req, res) => {
  res.send(`${req.query?.callback}(${hugedata})`)
});

// 启动服务
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
