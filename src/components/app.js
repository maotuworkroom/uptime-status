import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://s.xinu.ink/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率&nbsp;5&nbsp;分钟</p>
          <p>2024&nbsp;&copy;&nbsp;Xinu&nbsp;-&nbsp;<Link to='/' text='MC' /></p>
        </div>
      </div>
    </>
  );
}

export default App;
